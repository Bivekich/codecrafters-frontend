<script setup lang="ts">
import { ref, onMounted, type Ref } from 'vue';
import axios from 'axios';
import NavElement from "@/components/Hero/NavElement.vue";
import HeaderComponent from "@/components/Hero/HeaderElement.vue";

interface Hero {
  _id?: string;
  title: string;
  description: string;
}

const heroes: Ref<Hero> = ref({
  title: '',
  description: ''
});

const loadHeroes = async () => {
  try {
    const response = await axios.get('http://localhost:3000/hero');
    if (response.data && response.data.length > 0) {
      heroes.value = response.data[0];
    } else {
      console.error('Ответ не содержит данных героев');
    }
  } catch (error) {
    console.error('Ошибка при загрузке списка героев:', error);
  }
};

onMounted(() => {
  loadHeroes();
});
</script>

<template>
  <div class="container">
    <NavElement />
    <HeaderComponent :heroes="heroes" />
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100vh;
}
</style>

<template>
  <div class="container">
    <Nav />

    <Header :heroes="heroes" />
  </div>
</template>

<script setup lang="ts">
import Header from './Header.vue';
import Nav from './Nav.vue';
import { ref, onMounted } from 'vue'
import axios from 'axios'

interface Hero {
  _id?: string
  title: string
  description: string
  button?: string
}

const heroes: [Hero] = ref([{
  title: 'Title',
  description: 'Description'
}])

const loadHeroes = async () => {
  try {
    const response = await axios.get(`http://localhost:3000/hero`)
    heroes.value = response.data[0]
  } catch (error) {
    console.error('Ошибка при загрузке списка героев:', error)
  }
}

onMounted(() => {
  loadHeroes()
})
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100vh;
}
</style>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import axios from 'axios'

const heroes = ref<any[]>([])

const loadHeroes = async () => {
  try {
    const response = await axios.get(`http://localhost:3000/hero`)
    heroes.value = response.data
    console.log(response.data)
  } catch (error) {
    console.error('Ошибка при загрузке списка героев:', error)
  }
}

onMounted(loadHeroes)
</script>

<template>
  <div>
    <ul>
      <li v-for="hero in heroes" :key="hero.id">{{ hero.title }} - {{ hero.description }}</li>
    </ul>
  </div>
</template>

<style scoped></style>

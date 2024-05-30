<script setup lang="ts">
import NavElement from "@/components/Hero/NavElement.vue";
import HeaderComponent from "@/components/Hero/HeaderElement.vue";
import { useApi } from '@/stores/api'
import type Hero from '@/components/Hero/HeroInterface'

const response = useApi()
const heroes: Hero[] = await response.getData('hero')
</script>

<template>
  <div class="container">
    <NavElement />
    <HeaderComponent :heroes="heroes[0]" />
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
</style>

<template>
  <div class="nav">
    <img class="logo-start" src="../../assets/images/codecrafters-logo.svg" alt="">
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
  const image = document.querySelector('.nav img')

  image?.classList.add('logo-start')

  setTimeout(() => {
    image.style.transition = 'all 2s, transform .4s'
    image?.classList.remove('logo-start')
  }, 20)
})
</script>

<style lang="scss" scoped>
.nav {
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  height: 10%;

  img {
    width: 45px;
    mix-blend-mode: color-dodge;
    cursor: pointer;

    &:hover {
      transform: scale(1.05);
    }
  }

  .logo-start {
    opacity: 0;
    filter: blur(5px);
    transform: rotate(20deg);
  }
}
</style>
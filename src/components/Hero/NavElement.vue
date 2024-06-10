<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
  const image = document.querySelector('.nav img') as HTMLImageElement

  if (image) {
    image.classList.add('logo-start')

    setTimeout(() => {
      image.classList.remove('logo-start')
    }, 0)
  }
})
</script>

<template>
  <div class="nav">
    <img class="logo logo-start" src="https://imgur.com/oGsc8iy.png" alt="Codecrafters Logo">
  </div>
</template>

<style lang="scss" scoped>
.nav {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;

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

@media only screen and (max-width: 900px) {
  .nav {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 40px;
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
}
</style>

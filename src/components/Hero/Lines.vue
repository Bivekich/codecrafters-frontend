<template>
  <div class="lines">
    <div class="line l1"></div>
    <div class="line l2"></div>
    <div class="line l3"></div>
    <div class="line l4"></div>
    <div class="line l5"></div>
    <div class="line l6"></div>
    <div class="line l7"></div>
    <div class="line l8"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

onMounted(() => {
  const lines = document.querySelectorAll('.lines .line')
  let originStyles = []

  for (let i = 0; i < lines.length; i++) {
    let style = getComputedStyle(lines[i])

    if ((i + 1) % 2 == 0) {      
      originStyles.push(style.getPropertyValue('left'))
      lines[i].style.left = parseInt(style.getPropertyValue('left')) - 2000 + 'px'
    } else {
      originStyles.push(style.getPropertyValue('right'))
      lines[i].style.right = parseInt(style.getPropertyValue('right')) - 2000 + 'px'
    }
  }

  for (let i = 0; i < lines.length; i++) {
    lines[i].style.transition = 'all 5s'
    
    if ((i + 1) % 2 == 0) {
      lines[i].style.left = originStyles[i]
    } else {
      lines[i].style.right = originStyles[i]
    }
  }
})
</script>

<style scoped lang="scss">
.lines {
  position: absolute;
  width: 2000px;
  height: 90%;
  pointer-events: none;

  .line {
    width: 1000px;
    height: 1px;
    background: linear-gradient(to left, rgb(from white r g b / 0%), rgb(169, 240, 239), rgb(from white r g b / 0%));
    position: absolute;
    top: 0;
    right: -10%;
    opacity: .7;

    -webkit-mask-image: linear-gradient(-85deg, rgba(255, 255, 255, 0.4) 10%, #ffffff 50%, rgba(255, 255, 255, 0.4) 90%);
    -webkit-mask-size: 400%;
  }

  .l1 {
    width: 80%;
    background: linear-gradient(to left, rgb(from white r g b / 0%), rgb(169, 240, 239), rgb(from rgb(147, 221, 241) r g b / 20%) 60%, rgb(169, 240, 239), rgb(from white r g b / 0%));
    animation: shine 7s infinite;
  }

  .l2 {
    width: 1200px;
    background: linear-gradient(to right, rgba(255, 255, 255, 0.589), rgb(from white r g b / 0%));
    top: 15%;
    left: 0;
    animation: shine 5s infinite;
  }

  .l3 {
    width: 900px;
    background: linear-gradient(to left, rgba(157, 231, 251, 0.589) 80%, rgb(from white r g b / 0%));
    top: 26%;
    right: 0;
    animation: shine 4s infinite;
  }

  .l4 {
    width: 650px;
    background: linear-gradient(to right, rgba(113, 215, 243, 0.589), rgb(from white r g b / 0%));
    top: 38%;
    left: 0;
    animation: shine 6s infinite;
  }

  .l5 {
    width: 650px;
    top: 50%;
    animation: shine 4s infinite;
  }

  .l6 {
    width: 1000px;
    left: 0;
    top: 78%;
    animation: shine 5.5s infinite;
  }

  .l7 {
    width: 800px;
    background: linear-gradient(to left, rgba(113, 215, 243, 0.589), rgb(from white r g b / 0%));
    right: 0;
    top: 90%;
    animation: shine 4s infinite;
  }

  .l8 {
    height: 0;
  }
}

@-webkit-keyframes shine {
  from { -webkit-mask-position: 150%; }
  to { -webkit-mask-position: -50%; }
}
</style>
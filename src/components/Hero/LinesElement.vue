<script setup lang="ts">
import { onMounted } from 'vue';

onMounted(() => {
  const lines = document.querySelectorAll<HTMLDivElement>('.lines .line');
  const originStyles: string[] = [];

  lines.forEach((line, index) => {
    const style = getComputedStyle(line);

    if ((index + 1) % 2 === 0) {
      originStyles.push(style.getPropertyValue('left'));
      line.style.left = `${parseInt(style.getPropertyValue('left')) - 2000}px`;
    } else {
      originStyles.push(style.getPropertyValue('right'));
      line.style.right = `${parseInt(style.getPropertyValue('right')) - 2000}px`;
    }
  });

  setTimeout(() => {
    lines.forEach((line, index) => {
      line.style.transition = 'all 5s';

      if ((index + 1) % 2 === 0) {
        line.style.left = originStyles[index];
      } else {
        line.style.right = originStyles[index];
      }
    });
  }, 0);
});
</script>

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

<style scoped lang="scss">
.lines {
  position: absolute;
  width: 2000px;
  height: 100%;
  pointer-events: none;
  top: 0;

  .line {
    width: 1000px;
    height: 1px;
    background: linear-gradient(to left, rgba(255, 255, 255, 0%), rgb(169, 240, 239), rgba(255, 255, 255, 0%));
    position: absolute;
    top: 0;
    right: -10%;
    opacity: 0.7;
    mask-image: linear-gradient(-85deg, rgba(255, 255, 255, 0.4) 10%, #ffffff 50%, rgba(255, 255, 255, 0.4) 90%);
    mask-size: 400%;
    -webkit-mask-image: linear-gradient(-85deg, rgba(255, 255, 255, 0.4) 10%, #ffffff 50%, rgba(255, 255, 255, 0.4) 90%);
    -webkit-mask-size: 400%;
  }

  .l1 {
    width: 80%;
    background: linear-gradient(to left, rgba(255, 255, 255, 0%), rgb(169, 240, 239), rgba(147, 221, 241, 0.2) 60%, rgb(169, 240, 239), rgba(255, 255, 255, 0%));
    animation: shine 7s infinite;
  }

  .l2 {
    width: 1200px;
    background: linear-gradient(to right, rgba(255, 255, 255, 0.589), rgba(255, 255, 255, 0%));
    top: 15%;
    left: 0;
    animation: shine 5s infinite;
  }

  .l3 {
    width: 900px;
    background: linear-gradient(to left, rgba(157, 231, 251, 0.589) 80%, rgba(255, 255, 255, 0%));
    top: 26%;
    right: 0;
    animation: shine 4s infinite;
  }

  .l4 {
    width: 650px;
    background: linear-gradient(to right, rgba(113, 215, 243, 0.589), rgba(255, 255, 255, 0%));
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
    background: linear-gradient(to left, rgba(113, 215, 243, 0.589), rgba(255, 255, 255, 0%));
    right: 0;
    top: 90%;
    animation: shine 4s infinite;
  }

  .l8 {
    height: 0;
  }
}

@keyframes shine {
  from { -webkit-mask-position: 150%; }
  to { -webkit-mask-position: -50%; }
}

@media only screen and (max-width: 600px) {
  .lines {
    .l2 {
      width: 700px;
      top: 15%;
      left: 20%;
      animation: shine 5s infinite;
    }

    .l3 {
      width: 300px;
      background: linear-gradient(to left, rgba(157, 231, 251, 0.589) 80%, rgba(255, 255, 255, 0%));
      top: 26%;
      right: 30%;
      animation: shine 4s infinite;
    }

    .l4 {
      display: none;
    }

    .l5 {
      display: none;
    }

    .l6 {
      width: 400px;
      left: 30%;
    }

    .l7 {
      width: 800px;
      background: linear-gradient(to left, rgba(113, 215, 243, 0.589), rgba(255, 255, 255, 0%));
      right: 20%;
      top: 90%;
      animation: shine 4s infinite;
    }

    .l8 {
      height: 0;
    }
  }
}
</style>

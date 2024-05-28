<script setup lang="ts">
import SubcontentsElement from '@/components/Technologies/SubcontentsElement.vue'
import TechnolgiesAnimations from '@/components/Technologies/TechnolgiesAnimations.vue'
import type Technology from '@/components/Technologies/TechnologyInterface'
import axios from 'axios'
import { onMounted, ref } from 'vue'

const technologies = ref<Technology[]>([
  { title: '', name: '' }, { title: '', name: '' }, { title: '', name: '' }
])

async function loadTechnologies() {
  try {
    const response = await axios.get('http://localhost:3000/technologies/')
    technologies.value = response.data
  } catch (error) {
    console.error('Ошибка при загрузке списка технологий:', error)
  }
}

onMounted(loadTechnologies)
</script>

<template>
  <div class="container" id="technologies">
    <TechnolgiesAnimations />
    <div class="gradient"></div>
    <div class="gradient"></div>

    <div class="title">
      Используем новейшие скоростные технологии.
      <div class="blur blur-4"></div>
    </div>

    <div class="content">
      <div class="image">
        <img src="../../../../src/assets/images/technologies/cpu.svg" alt="">
        <div class="blur blur-1"></div>
        <div class="blur blur-2"></div>
        <div class="blur blur-3"></div>
      </div>

      <div class="boxes">
        <div v-for="(technology) in technologies.filter((object) => object.isMain)" :key="technology" class="border-gradient" :class="'border-gradient-' + technology.name">
          <div :class="'box box-' + technology.name">
            <img :src="'../../../../src/assets/images/technologies/' + technology.name + '.svg'" alt="">
            <div class="box-bottom">
              <div class="box-title">{{ technology.title }}</div>
              <div class="box-text">{{ technology.description }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <SubcontentsElement :technologies="technologies" />

  </div>
</template>

<style scoped lang="scss">
@import "../../assets/styles/colors";

.container {
  height: 950px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: start;
  gap: 70px;
  background: $dark-2;
  width: 100%;
  overflow: hidden;
  position: relative;
}

.gradient {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 2;
  pointer-events: none;
}

.gradient:nth-child(1) {
  background: linear-gradient(to right, $dark-2, rgba($dark-2, 0) 10%);
}

.gradient:nth-child(2) {
  background: linear-gradient(to left, $dark-2, rgba($dark-2, 0) 10%);
}

.blur {
  position: absolute;
  width: 300px;
  height: 300px;
  background: rgba($dark-2, .5);
  left: -100px;
  top: -50px;
  backdrop-filter: blur(5px);
  mask-image: radial-gradient(rgba($dark-2, 1), rgba($dark-2, 0) 80%);
  pointer-events: none;
}

.blur-2 {
  left: auto;
  top: -20px;
  right: -100px;
}

.blur-3 {
  left: 45%;
}

.blur-4 {
  left: 0;
  top: -50px;
  width: 600px;
  mask-image: linear-gradient(to right, rgba($dark-2, .8), rgba($dark-2, 0));
}

.title {
  font-size: 50px;
  line-height: 45px;
  width: 700px;
  background: linear-gradient(-100deg, $gradient-6);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  margin-top: 7%;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  z-index: 10;

  .image {
    width: 55%;
    position: relative;

    img {
      transform: translateX(-5px);
      width: 100%;
      display: block;
    }
  }

  .boxes {
    display: flex;
    justify-content: center;
    gap: 6.5%;
    width: 100%;

    .border-gradient {
      box-sizing: border-box;
      width: 20%;
      height: 300px;
      border-radius: 30px;
      padding: .06em;

      .box {
        background: $dark-1;
        width: 100%;
        height: 100%;
        border-radius: 30px;
        box-sizing: border-box;
        padding: 20px;
        mask-size: 200%;

        img {
          height: 70px;
          margin-bottom: 20px;
        }

        .box-title {
          font-size: 30px;
          margin-bottom: 10px;
        }

        .box-text {
          font-weight: 300;
          font-size: 16px;
          line-height: 20px;
        }
      }

      .box-vue {
        .box-title { color: #1cbd93; }
        .box-text { color: #79978f; }
        img { width: 90px }
        mask-image: linear-gradient(-80deg, rgba(255, 255, 255, 0.9) 10%, #ffffff 30%, rgba(255, 255, 255, 0.9) 90%);
        //animation: shine 3s infinite linear;
      }

      @keyframes shine {
        from { mask-position: 150%; }
        to { mask-position: -50%; }
      }

      .box-express {
        .box-title { color: #d5da3a; }
        .box-text { color: #939378; }
        img { width: 85px }
        mask-image: linear-gradient(-90deg, rgba(255, 255, 255, 0.9) 10%, #ffffff 50%, rgba(255, 255, 255, 0.9) 90%);
        //animation: shine 3.2s infinite linear;
      }

      .box-mongodb {
        .box-title { color: #2dbacf; }
        .box-text { color: #758c8e; }
        img { height: 85px }
        mask-image: linear-gradient(-70deg, rgba(255, 255, 255, 0.9) 10%, #ffffff 70%, rgba(255, 255, 255, 0.9) 90%);
        //animation: shine 4s infinite linear;
      }
    }

    .border-gradient-vue {
      background: linear-gradient(200deg, $gradient-7);
      box-shadow: 0px 3px 3px 0px rgba(15, 92, 71, 0.51);
    }

    .border-gradient-express {
      background: linear-gradient(50deg, $gradient-8);
      box-shadow: 0px 3px 3px 0px rgb(66, 66, 45);
    }

    .border-gradient-mongodb {
      background: linear-gradient(220deg, $gradient-9);
      box-shadow: 0px 3px 3px 0px rgb(50, 83, 87);
    }
  }
}
</style>
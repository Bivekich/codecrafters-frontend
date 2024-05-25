<template>
  <div class="header">
    <div class="title">{{ props.heroes.title }}</div>
    <div class="description">{{ props.heroes.description }}</div>

    <div class="button">
      <button><div>Связаться</div></button>
    </div>

    <Lines />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import Lines from './Lines.vue'

const props = defineProps(['heroes'])

onMounted(() => {
  const title = document.querySelector('.header .title')
  const desc = document.querySelector('.header .description')
  const button = document.querySelector('.header .button')
  
  let header = [title, desc, button]

  header.map(element => element?.classList.add('header-start'))

  for (let i = 0; i < header.length; i++) {    
    setTimeout(() => {
      header[i].style.transition = 'all 2s'
      header[i].classList.remove('header-start')
    }, 10)
  }
})
</script>

<style lang="scss" scoped>
@import '../../assets/styles/colors.scss';

.header-start {
  transform: scale(1.5);
  opacity: 0;
  filter: blur(10px);
}

.header {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 90%;

  .title {
    font-size: 80px;
    font-weight: bold;
    background: -webkit-linear-gradient(-100deg, $gradient-1);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .description {
    font-size: 20px;
    font-weight: 300;
    width: 600px;
    background: -webkit-linear-gradient(-90deg, $gradient-2);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .button {
    margin-top: 50px;
    background: linear-gradient(-120deg, $gradient-3);
    border-radius: 50px;
    padding: 2px;

    -webkit-mask-image: linear-gradient(-85deg, rgba(255, 255, 255, 0.4) 10%, #ffffff 50%, rgba(255, 255, 255, 0.4) 90%);
    -webkit-mask-size: 200%;
    animation: shine 4s infinite linear;

    button {
      border: 0;
      background: $dark-1;
      border-radius: 50px;
      padding: 10px 50px;
      cursor: pointer;

      &:hover {
        animation: mouse-on 1s linear forwards;
      }

      &:not( :hover ){
        animation: mouse-out 2s linear forwards;
      }

      @-webkit-keyframes shine {
        from { -webkit-mask-position: 150%; }
        to { -webkit-mask-position: -50%; }
      }

      @-webkit-keyframes mouse-on {
        0% { opacity: .9; }
        50% { opacity: .7; }
        100% { opacity: .8; }
      }

      @-webkit-keyframes mouse-out {
        0% { opacity: .8; }
        100% { opacity: 1; }
      }
    }

    div {
      background: -webkit-linear-gradient(70deg, $gradient-4);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
}
</style>
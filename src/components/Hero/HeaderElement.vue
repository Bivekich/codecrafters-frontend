<script setup lang="ts">
import { onMounted } from 'vue'
import LinesElement from '@/components/Hero/LinesElement.vue'

interface Heroes {
  title: string;
  description: string;
}

defineProps<{ heroes: Heroes }>()

onMounted(() => {
  const title = document.querySelector('.header .title') as HTMLElement
  const desc = document.querySelector('.header .description') as HTMLElement
  const button = document.querySelector('.header .button') as HTMLElement

  const headerElements = [title, desc, button]

  headerElements.forEach(element => element?.classList.add('header-start'))

  headerElements.forEach((element, index) => {
    setTimeout(() => {
      element.style.transition = 'all 2s'
      element.classList.remove('header-start')
    }, (index + 1) * 100)
  })

  button.onclick = () => {
    const contact = document.getElementById('contact') as HTMLElement
    contact.scrollIntoView({
      behavior: 'smooth'
    })
  }
})
</script>

<template>
  <div class="header">
    <div class="title">{{ heroes.title }}</div>
    <div class="description">{{ heroes.description }}</div>

    <div class="button">
      <button><span>Связаться</span></button>
    </div>

    <LinesElement />
  </div>
</template>

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
  position: relative;

  .title {
    font-size: 80px;
    font-weight: bold;
    background: -webkit-linear-gradient(-100deg, $gradient-1);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .description {
    font-size: 20px;
    font-weight: 300;
    width: 600px;
    background: -webkit-linear-gradient(-90deg, $gradient-2);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .button {
    margin-top: 50px;
    background: linear-gradient(-120deg, $gradient-3);
    border-radius: 50px;
    padding: 2px;
    mask-image: linear-gradient(-85deg, rgba(255, 255, 255, 0.4) 10%, #ffffff 50%, rgba(255, 255, 255, 0.4) 90%);;
    mask-size: 200%;
    -webkit-mask-image: linear-gradient(-85deg, rgba(255, 255, 255, 0.4) 10%, #ffffff 50%, rgba(255, 255, 255, 0.4) 90%);
    -webkit-mask-size: 200%;
    animation: shine 4s infinite linear;
    position: relative;

    button {
      border: 0;
      background: $dark-1;
      border-radius: 50px;
      padding: 10px 50px;
      cursor: pointer;
      font-family: "Inter", sans-serif;
      font-size: 20px;
      font-weight: 400;


      &:hover {
        animation: mouse-on 1s linear forwards;
      }

      &:not(:hover) {
        animation: mouse-out 2s linear forwards;
      }

      @keyframes shine {
        from {
          -webkit-mask-position: 150%;
        }
        to {
          -webkit-mask-position: -50%;
        }
      }

      @keyframes mouse-on {
        0% {
          opacity: .9;
        }
        50% {
          opacity: .7;
        }
        100% {
          opacity: .8;
        }
      }

      @keyframes mouse-out {
        0% {
          opacity: .8;
        }
        100% {
          opacity: 1;
        }
      }
    }

    span {
      background: -webkit-linear-gradient(70deg, $gradient-4);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
}

@media only screen and (max-width: 900px) {
  .header {
    .button {
      margin-top: 50px;
      background: linear-gradient(-120deg, $gradient-3);
      border-radius: 50px;
      padding: 2px;
      mask-image: linear-gradient(-85deg, rgba(255, 255, 255, 0.4) 10%, #ffffff 50%, rgba(255, 255, 255, 0.4) 90%);;
      mask-size: 200%;
      -webkit-mask-image: linear-gradient(-85deg, rgba(255, 255, 255, 0.4) 10%, #ffffff 50%, rgba(255, 255, 255, 0.4) 90%);
      -webkit-mask-size: 200%;
      animation: shine 4s infinite linear;
      position: relative;

      button {
        border: 0;
        background: $dark-1;
        border-radius: 50px;
        padding: 10px 50px;
        cursor: pointer;
        font-family: "Inter", sans-serif;
        font-size: 20px;
        font-weight: 400;


        &:hover {
          animation: mouse-on 1s linear forwards;
        }

        &:not(:hover) {
          animation: mouse-out 2s linear forwards;
        }

        @keyframes shine {
          from {
            -webkit-mask-position: 150%;
          }
          to {
            -webkit-mask-position: -50%;
          }
        }

        @keyframes mouse-on {
          0% {
            opacity: .9;
          }
          50% {
            opacity: .7;
          }
          100% {
            opacity: .8;
          }
        }

        @keyframes mouse-out {
          0% {
            opacity: .8;
          }
          100% {
            opacity: 1;
          }
        }
      }

      span {
        background: -webkit-linear-gradient(70deg, $gradient-4);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
  }
}

@media only screen and (max-width: 600px) {
  .header {
    .title {
      font-size: 45px;
    }

    .description {
      font-size: 15px;
      width: 300px;
    }
  }
}
</style>

<script lang="ts" setup>
import axios from 'axios'
import { onMounted, ref } from 'vue'

interface Contact {
  title: string
  text: string
  button: string
}

const contact = ref<Contact[]>([{
  title: '', text: '', button: ''
}])

async function getContact() {
  try {
    const response = await axios.get('http://localhost:3000/contact')
    contact.value = response.data
  } catch (error) {
    console.log('Не удалось получить контакты: ', error)
  }
}

onMounted(getContact)
</script>

<template>
  <div class="container">
    <div class="gradient"></div>
    <div class="gradient"></div>
    <div class="gradient"></div>

    <div class="left">
      <div class="title">
        {{ contact[0].title }}

        <div class="line"></div>
        <div class="line"></div>
      </div>

      <div class="text">
        {{ contact[0].text }}
      </div>
      <div class="input">
        <img src="../../assets/images/contact/arroba.png" alt="">
        <input type="text" placeholder="Введите userid...">
        <button>{{ contact[0].button }}</button>
      </div>
    </div>
    <div class="right">
      <img src="../../assets/images/contact/telegram-connect-1.svg" alt="">
      <img src="../../assets/images/contact/telegram-connect-2.svg" alt="">
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "../../assets/styles/colors";

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 600px;
  background: $dark-2;
  gap: 10%;
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
  background: linear-gradient(to bottom, $dark-2, rgba($dark-2, 0) 20%);
}

.gradient:nth-child(2) {
  background: linear-gradient(to left, $dark-2, rgba($dark-2, 0) 15%);
}

.gradient:nth-child(3) {
  background: linear-gradient(to right, $dark-2, rgba($dark-2, 0) 15%);
}

.left {
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 35%;

  .title {
    font-size: 50px;
    font-weight: bold;
    margin-bottom: 70px;
    background: linear-gradient(360deg, $gradient-10);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    .line {
      position: absolute;
      background: rgba(255, 255, 255, 0.2);
      background-image: radial-gradient($dark-2 11px, transparent 0);
      background-size: 22px 22px;
      background-position: -19px -19px;
    }

    .line:nth-child(1) {
      width: 100vw;
      height: 1px;
      top: 40%;
      left: 0;
    }

    .line:nth-child(2) {
      height: 1200px;
      width: 1px;
      top: 0;
      left: 10%;
    }
  }

  .text {
    font-size: 18px;
    font-weight: 300;
    color: #8f8f8f;
  }

  .input {
    margin-top: 20px;
    width: 90%;
    height: 50px;
    display: flex;
    border: 1px solid white;
    border-radius: 20px;
    align-items: center;

    img {
      width: 30px;
      height: 30px;
      filter: invert(1);
      margin-left: 10px;
    }

    input {
      width: 100%;
      background: transparent;
      outline: none;
      border: none;
      padding: 10px 10px;
      font-size: 18px;
      color: white;
      font-family: "Inter", sans-serif;
    }

    button {
      font-family: "Inter", sans-serif;
      font-size: 18px;
      border-left: 1.5px solid white;
      transform: scale(1.02);
      background: white;
      border-radius: 18px;
      border-bottom-left-radius: 0;
      border-top-left-radius: 0;
      width: 40%;
      cursor: pointer;
      height: 100%;

      &:hover {
        background: transparent;
        color: white;
      }
    }
  }
}

.right {
  width: 30%;
  position: relative;

  img {
    width: 70%;
  }

  img:nth-child(1) {
    position: absolute;
    left: -30px;
  }

  img:nth-child(2) {
    position: relative;
    left: 80px;
    top: 50px;
  }
}
</style>
<script setup lang="ts">
</script>
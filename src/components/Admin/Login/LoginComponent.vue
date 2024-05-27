<script setup lang="ts">
import {ref} from 'vue'
import axios from 'axios';
import {useRouter} from "vue-router";

const router = useRouter()
const username = ref('')
const password = ref('')

const login = async () => {
  try {
    const response = await axios.post('http://localhost:3000/auth/login', {
      username: username.value,
      password: password.value,
    })
    localStorage.setItem('token', response.data.token)
    await router.push('/admin')
  } catch (error) {
    console.error('Ошибка авторизации:', error)
  }
}
</script>

<template>
  <div class="auth-container">
    <h1>Авторизация</h1>
    <form @submit.prevent="login">
      <div class="form-group">
        <label for="username">Имя пользователя</label>
        <input v-model="username" type="text" id="username" required>
      </div>
      <div class="form-group">
        <label for="password">Пароль</label>
        <input v-model="password" type="password" id="password" required>
      </div>
      <button type="submit">Войти</button>
    </form>
  </div>
</template>

<style scoped lang="scss">
.auth-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
}

form div input {
  color: black;
}

button {
  background-color: #4CAF50;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}
</style>
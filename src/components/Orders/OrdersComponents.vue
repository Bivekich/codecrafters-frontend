<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';

interface Order {
  _id: string;
  image: string;
  title: string;
  link: string;
}

const orders = ref<Order[]>([]);

const fetchOrders = async () => {
  try {
    const response = await axios.get('http://localhost:3000/orders');
    orders.value = response.data;
  } catch (error) {
    console.error('Ошибка при получении заказов:', error);
  }
};

onMounted(fetchOrders);
</script>

<template>
    <div>
      <h1>Список заказов</h1>
      <ul>
        <li v-for="order in orders" :key="order._id">
          <img :src="order.image" alt="Order Image" />
          <h2>{{ order.title }}</h2>
          <a :href="order.link">{{ order.link }}</a>
        </li>
      </ul>
    </div>
</template>

<style scoped lang="scss">

</style>
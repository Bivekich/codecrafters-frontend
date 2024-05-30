import { defineStore } from "pinia";
import axios from 'axios'

export const useApi = defineStore("api", {
  state: () => ({
    endpoint: 'http://localhost:3000/'
  }),
  actions: {
    async getData(data: string) {
      try {
        const response = await axios.get(this.endpoint + data)
        return response.data
      } catch (error) {
        console.error('Ошибка:', error);
      }
    }
  }
})
import { defineStore } from 'pinia'
import axios from 'axios'

export const useApi = defineStore('api', {
  state: () => ({
    endpoint: 'https://codecrafters-backend.vercel.app/',
    isLoaded: false
  }),
  actions: {
    async getData(data: string) {
      this.isLoaded = false

      try {
        const response = await axios.get(this.endpoint + data)
        this.isLoaded = true
        return response.data
      } catch (error) {
        console.error('Ошибка:', error)
      }
    }
  }
})
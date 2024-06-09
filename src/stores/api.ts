import { defineStore } from 'pinia'
import axios from 'axios'

export const useApi = defineStore('api', {
  state: () => ({
    endpoint: 'https://codecrafters-backend.vercel.app/',
    isLoaded: false,
    requestsCount: 0,
    gotRequestsCount: 0,
  }),
  actions: {
    async getData(data: string) {
      this.requestsCount++

      try {
        const response = await axios.get(this.endpoint + data)
        this.gotRequestsCount++
        if (this.gotRequestsCount === this.requestsCount) {
          this.isLoaded = true
        }
        return response.data
      } catch (error) {
        console.error('Ошибка:', error)
      }
    }
  }
})
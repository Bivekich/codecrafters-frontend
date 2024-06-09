<script setup lang="ts">
import HeroComponent from '@/components/Hero/HeroComponent.vue'
import OrdersComponents from "@/components/Orders/OrdersComponents.vue";
import TechnologiesComponent from '@/components/Technologies/TechnologiesComponent.vue'
import ContactComponent from '@/components/Contact/ContactComponent.vue'
import CommentsComponent from '@/components/Comments/CommentsComponent.vue'
import FooterComponent from '@/components/Footer/FooterComponent.vue'

import { useApi } from '@/stores/api'

const api = useApi()
</script>

<template>
  <Suspense><HeroComponent /></Suspense>
  <Suspense><OrdersComponents /></Suspense>
  <Suspense><TechnologiesComponent /></Suspense>
  <Suspense v-if="api.isLoaded"><ContactComponent /></Suspense>
  <Suspense><CommentsComponent /></Suspense>
  <Suspense v-if="api.isLoaded"><FooterComponent /></Suspense>
</template>
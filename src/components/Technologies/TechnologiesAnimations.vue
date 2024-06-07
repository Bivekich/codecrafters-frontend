<template></template>

<script setup lang="ts">
import { onMounted } from 'vue'

onMounted((): void => {
  const component: HTMLElement = document.getElementById('technologies') as HTMLElement

  const subcontents = component.querySelectorAll('.subcontent') as NodeListOf<HTMLElement>

  const originPositions: string[] = []
  const clientScreen: number = window.screen.height
  let animationAvailable: boolean = true

  subcontents.forEach((subcontent: HTMLElement, i: number): void => {
    if ((i + 1) % 2 === 0) {
      originPositions.push(getComputedStyle(subcontent).getPropertyValue('left'))
      subcontent.style.left = '-100vw'
    } else {
      originPositions.push(getComputedStyle(subcontent).getPropertyValue('right'))
      subcontent.style.right = '-100vw'
    }
  })

  const gradients = component.querySelectorAll('.gradient') as NodeListOf<HTMLElement>
  gradients.forEach((gradient: HTMLElement): void => {
    gradient.style.opacity = '0'
  })

  const title = component.querySelector('.title') as HTMLElement
  title.style.opacity = '0'

  window.onscroll = (): void => {
    const distanceToComponent: number = component.getBoundingClientRect().top

    if (distanceToComponent + clientScreen < clientScreen && animationAvailable) {
      subcontentsAnimation()
      gradientAnimation()
      titleAnimation()

      animationAvailable = false
    }
  }

  function titleAnimation() {
    const transition: number = 1000

    title.style.transition = `opacity ${transition}ms`
    title.style.opacity = '1'
  }

  function gradientAnimation() {
    gradients.forEach((gradient: HTMLElement): void => {
      gradient.style.transition = 'opacity 5s'
      gradient.style.opacity = '1'
    })
  }

  function subcontentsAnimation() {
    subcontents.forEach((subcontent: HTMLElement, i: number): void => {
      subcontent.style.transition = `all ${1 + (i / 2)}s`

      if ((i + 1) % 2 === 0) {
        subcontent.style.left = originPositions[i]
      } else {
        subcontent.style.right = originPositions[i]
      }
    })
  }
})
</script>
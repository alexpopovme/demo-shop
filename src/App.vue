<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import MainHeader from '@/components/MainHeader.vue'

const route = useRoute()
const displayHeader = computed(() => {
  return route.name !== 'Basket'
})
</script>

<template>
  <div class="app-container" ref="appContainer">
    <MainHeader v-if="displayHeader"/>
    <router-view></router-view>
  </div>
</template>

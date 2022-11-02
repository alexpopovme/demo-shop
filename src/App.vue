<script setup lang="ts">
import { useRouter } from 'vue-router'
import { computed } from 'vue'
import MainHeader from '@/components/MainHeader.vue'

const router = useRouter()
const displayHeader = computed(() => {
  return router.currentRoute.value.path !== '/basket'
})
</script>

<template>
  <div class="app-container" ref="appContainer">
    <MainHeader v-if="displayHeader"/>
    <router-view></router-view>
  </div>
</template>

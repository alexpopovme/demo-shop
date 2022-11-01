<script setup lang="ts">
import MainHeader from '@/components/MainHeader.vue'
import { useRouter } from 'vue-router'
import { computed } from 'vue'

const router = useRouter()
const displayHeader = computed(() => {
  return router.currentRoute.value.path !== '/basket'
})
</script>

<template>
  <MainHeader v-if="displayHeader"/>
  <router-view></router-view>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { getCategories } from '@/utils/api'
import CategoriesNav from '@/components/CategoriesNav.vue'
import type { CategoriesData } from '@/types/api'

const categoriesData = ref<CategoriesData>(null)

onMounted(() => {
  getCategories()
    .then((data) => {
      categoriesData.value = data
    })
})

</script>

<template>
  <CategoriesNav :categoriesData="categoriesData"/>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

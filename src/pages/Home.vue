<script setup lang="ts">
import { computed, ref } from 'vue'
import type { CategoriesData } from '@/types/api'
import { getCategories } from '@/utils/api'
import CategoriesNav from '@/components/category/CategoriesNav.vue'
import ProductsView from '@/components/product/ProductsView.vue'
import { store } from '@/utils/store'

const categoriesData = ref<CategoriesData>(null)
const activeCategory = computed(() => {
  if (!categoriesData.value) return null
  return categoriesData.value.items[store.getActiveCatIndex()]
})

getCategories()
  .then((data) => {
    if (!data) return
    categoriesData.value = data
  })
</script>

<template>
  <CategoriesNav :categoriesData="categoriesData"/>
  <section class="container">
    <ProductsView :activeCategory="activeCategory"/>
  </section>
</template>

<style lang="scss">

</style>

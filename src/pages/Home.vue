<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { getCategories } from '@/utils/api'
import type { CategoriesData } from '@/types/api'
import CategoriesNav from '@/components/CategoriesNav.vue'
import ProductsList from '@/components/ProductsList.vue'
import ProductsHeader from '@/components/ProductsHeader.vue'

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
  <section class="container">
    <ProductsHeader />
    <ProductsList />
  </section>
</template>

<style lang="scss">

</style>

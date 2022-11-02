<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import ProductsList from './ProductsList.vue'
import ProductsHeader from './ProductsHeader.vue'
import { Category } from '@/types/common'

interface Props {
  activeCategory: Category
}

const props = defineProps<Props>()
const categoryIsAvailable = ref(false)
const categoryId = ref(0)
const headerData = ref({ name: '', productCount: 0})

watchEffect(() => {
  if (props.activeCategory) {
    categoryIsAvailable.value = true
    headerData.value = {
      name: props.activeCategory.name,
      productCount: props.activeCategory.productCount
    }
    categoryId.value = props.activeCategory.id
  }
})
</script>

<template>
  <div
    class="products-view__loader"
    v-if="!categoryIsAvailable">
      Loading products ...
    </div>
  <ProductsHeader v-if="categoryIsAvailable" :headerData="headerData" />
  <ProductsList v-if="categoryIsAvailable" :categoryId="categoryId"/>
</template>

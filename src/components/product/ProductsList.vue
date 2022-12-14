<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { useRouter } from 'vue-router'
import ProductCard from '@/components/product/ProductCard.vue'
import { getProductsByCategory } from '@/utils/api'
import type { Product } from '@/types/common'
import { store } from '@/utils/store'

interface Props {
  categoryId: number
}

const router = useRouter()
const props = defineProps<Props>()
const productList = ref<Product[]>()

watchEffect(() => {
  getProductsByCategory(props.categoryId)
    .then((data) => {
      if (!data) return
      productList.value = data.items
    })
})

const handleCardClick = (ev: Event) => {
  const target = ev.target as HTMLElement
  const idStr = target.dataset.id
  if (!idStr || !productList.value) return

  const id = parseInt(idStr, 10)

  const activeProduct = productList.value
    .find((entry) => {
      return entry.id === id
    })

  store.setActiveProduct(activeProduct)

  router.push({
    name: 'Product',
    params: { id }
  })
}
</script>

<template>
  <el-row @click="handleCardClick">
    <el-col
      :xs="24" :sm="12" :lg="8" :xl="6"
      v-for="item in productList"
      :key="item.id"
      :offset="0"
    >
      <ProductCard :item="item"/>
    </el-col>
  </el-row>
</template>

<style lang="scss">
@use '../../styles/productList_max767' as *;
@use '../../styles/productList_max520' as *;

@include productListMax767;
@include productListMax520;
</style>

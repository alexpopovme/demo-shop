<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import ProductItem from '@/components/product/ProductItem.vue'
import { getProductsByCategory } from '@/utils/api'
import type { Product } from '@/types/common'

interface Props {
  categoryId: number
}

const props = defineProps<Props>()
const productList = ref<[Product]>()

watchEffect(() => {
  getProductsByCategory(props.categoryId)
    .then((data) => {
      if (!data) return
      productList.value = data.items
    })
})
</script>

<template>
  <el-row>
    <el-col
      :xs="24" :sm="12" :lg="8" :xl="6"
      v-for="item in productList"
      :key="item.id"
      :offset="0"
    >
      <ProductItem :item="item"/>
    </el-col>
  </el-row>
</template>

<style lang="scss">

</style>

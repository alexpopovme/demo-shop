<script setup lang="ts">
import { store } from '@/utils/store'
import type { Product } from '@/types/common'

interface Props {
  id: number
}
const props = defineProps<Props>()
</script>

<template>
  <el-button
    type="info"
    round
    @click="store.addToBasket(id)"
  >
    Add to basket
  </el-button>
</template>

<style lang="scss">

</style>

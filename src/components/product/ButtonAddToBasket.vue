<script setup lang="ts">
import { store } from '@/utils/store'

interface Props {
  id: number
}
const props = defineProps<Props>()
</script>

<template>
  <el-button
    class="button-add-to-basket"
    type="info"
    round
    @click="store.addToBasket(id)"
  >
    Add to basket
  </el-button>
</template>

<style lang="scss">
@use '../../styles/vars' as *;

.button-add-to-basket {
  width: $productButtonsWidth;
}
</style>

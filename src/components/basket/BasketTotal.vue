<script setup lang="ts">
interface Props {
  total: number
}

const props = defineProps<Props>()
const currency = '₽'
</script>

<template>
  <div class="basket-total" v-if="total > 0">
    <span class="basket-total__text">TOTAL:</span>
    <span class="basket-total__num">{{ total }}{{ currency }}</span>
  </div>
</template>

<style lang="scss">
@use '../../styles/vars' as *;

.basket-total {
  display: flex;
  justify-content: space-between;
  padding: 0.8rem 2rem;
  font-size: 1.2rem;
  font-weight: bold;
  border-radius: 8rem;
  background-color: rgba($accentColor, 0.15);
}
</style>

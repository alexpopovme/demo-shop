<script setup lang="ts">
interface Props {
  name: string,
  priceFormatted: string
}

const props = defineProps<Props>()
</script>

<template>
  <div class="product-info">
        <span class="product-info__text">
          {{ name }}
        </span>
    <span class="product-info__price">
          {{ priceFormatted }}
        </span>
  </div>
</template>

<style lang="scss">
@use '../../styles/mixins' as *;

.product-info {
  display: flex;
  flex-direction: column;
  @include flexCenter;
  &__text {
    font-weight: bold;
  }
  &__price {
    font-weight: bold;
    font-size: 1.5rem;
    padding: 1rem 0;
  }
}
</style>

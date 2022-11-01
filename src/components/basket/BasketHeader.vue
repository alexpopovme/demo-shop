<script setup lang="ts">
interface Props {
  requestedItemsN: number
  purchased: boolean
}

const props = defineProps<Props>()
</script>

<template>
  <header class="basket-header">
    <div class="basket-header__congrats-text-wrap" v-if="purchased" >
      <span class="basket-header__congrats-text">
        Congratulations on your purchase!
      </span>
    </div>
    <span class="basket-header__text" v-else>
      You have {{ requestedItemsN }} item in your basket
    </span>
  </header>
</template>

<style lang="scss">
@use '../../styles/vars' as *;

.basket-header {
  display: flex;
  align-items: center;
  padding: $basketContentPadding;
  &__text {
    font-size: 1.3rem;
  }
  &__congrats-text-wrap {
    flex-grow: 1;
    text-align: center;
    font-size: 1.3rem;
  }
}
</style>

<script setup lang="ts">
interface Props {
  purchased: boolean
}

const props = defineProps<Props>()
</script>

<template>
  <div class="basket-purchased" v-if="purchased">
    <img
      class="basket-purchased__image"
      src="../../assets/thanks.png"
      alt="Thank you"
    />
  </div>
</template>

<style lang="scss">
@use '../../styles/mixins' as *;

.basket-purchased {
  text-align: center;
  &__image {
    opacity: 0.8;
    @include fitImage;
    max-width: 220px;
  }
}
</style>

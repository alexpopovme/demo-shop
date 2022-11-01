<script setup lang="ts">
interface Props {
  total: number
}
interface Emits {
  (ev: 'clicked:buy-now', payload: void): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

const handleBuyNowClick = () => {
  emit('clicked:buy-now')
}
</script>

<template>
  <div class="basket-buy-button-wrap" v-if="total > 0" >
    <button
      class="basket-buy-button"
      type="button"
      @click="handleBuyNowClick"
    >
      Buy Now
    </button>
  </div>
</template>

<style lang="scss">
@use '../../styles/vars' as *;
.basket-buy-button-wrap {
  margin-top: 1rem;
}

.basket-buy-button {
  width: 100%;
  padding: 0.8rem 2rem;
  border-radius: 8rem;
  font-size: 1.2rem;
  font-weight: bold;
  color: inherit;
  outline: none;
  border: 1px $mainBorderColor solid;
  background: none;
  cursor: pointer;
  transition: background-color ease 0.2s;
  &:hover {
    background-color: $mainColor;
    color: white
  }
}
</style>

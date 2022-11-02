<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { store } from '@/utils/store'

const router = useRouter()
const counter = computed(() => {
  const count = store.getItemsInBasket().length
  return count || ''
})
const clickHandler = () => {
  if (!counter.value) return
  router.push({ name: 'Basket' })
}
</script>

<template>
  <div
    class="basket-button"
    @click="clickHandler"
  >
    <img
      class="basket-button__img"
      src="@/assets/bag.png"
      alt="Go to basket"/>
    <div class="basket-button__counter">
      {{ counter }}
    </div>
  </div>
</template>

<style lang="scss">
@use '../../styles/vars' as *;
@use '../../styles/mixins' as *;

.basket-button {
  position: relative;
  height: 100%;
  padding: 0.95rem;
  margin: auto 0;
  cursor: pointer;
  transition: transform 0.2s ease;
  user-select: none;
  &:hover {
    @include buttonHoverEffect;
  }
  &__counter {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    bottom: 0;
    left: 0;
    width: 100%;
    color: $accentColor;
    font-size: 0.9rem;
    padding-bottom: 0.9rem;
  }
  &__img {
    @include fitImage;
    opacity: 0.3;
  }
}
</style>

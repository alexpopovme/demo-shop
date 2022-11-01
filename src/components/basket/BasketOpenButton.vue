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
  router.push({ path: '/basket' })
}
</script>

<template>
  <div
    class="bag"
    @click="clickHandler"
  >
    <img
      class="bag__img"
      src="@/assets/bag.png"
      alt="bag"/>
    <div class="bag__counter">
      {{ counter }}
    </div>
  </div>
</template>

<style lang="scss">
@use '../../styles/vars' as *;
@use '../../styles/mixins' as *;

.bag {
  position: relative;
  height: 80%;
  margin: auto 0;
  cursor: pointer;
  transition: transform 0.2s ease;
  user-select: none;
  &:hover {
     transform: scale(1.05);
    filter: invert(40%);
    box-shadow: 0 2px 0 0 rgba(149, 157, 165, 0.2);
  }
  &__counter {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    color: $accentColor;
    font-size: 1.1rem;
    padding-bottom: 0.1rem;
  }
  &__img {
    @include fitImage;
    opacity: 0.3;
  }
}
</style>

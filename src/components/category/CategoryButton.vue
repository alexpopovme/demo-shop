<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const displayCategoryButton = computed(() => {
  return route.name === 'Home'
})
</script>

<template>
  <div class="category-button" v-if="displayCategoryButton">
    <img
      class="category-button__img"
      src="@/assets/menu.png" alt="logo"/>
  </div>
</template>

<style lang="scss">
@use '../../styles/mixins' as *;

.category-button {
  height: 100%;
  padding: 0.66rem;
  transition: transform 0.2s ease;
  cursor: pointer;
  &:hover {
    @include buttonHoverEffect;
  }
  &__img {
    @include fitImage;
    opacity: 0.3;
  }
}
</style>

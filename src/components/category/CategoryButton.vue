<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { store } from '@/utils/store'

const route = useRoute()
const displayCategoryButton = computed(() => {
  return route.name === 'Home'
})

const handleCategoryButtonClick = () => {
  store.setCategoriesVisibility(!store.getCategoriesVisibility())
}
</script>

<template>
  <div class="category-button"
       v-if="displayCategoryButton"
       @click="handleCategoryButtonClick"
  >
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

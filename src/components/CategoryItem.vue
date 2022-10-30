<script setup lang="ts">
import type { Category } from '@/types/common'

interface Props {
  category: Category
}

const props = defineProps<Props>()
</script>

<template>
  <div class="category-item">
    <div class="category-item__img-wrapper">
      <img
        class="category-item__img"
        :src="category.thumbnail.url"
        :alt="category.name"
      />
    </div>
    <span class="category-item__text">
      {{ category.name }}
    </span>
  </div>
</template>

<style lang="scss">
@use '../styles/mixins' as *;
@use '../styles/vars' as *;
@use '../styles/categoryItem_max520' as *;

.category-item {
  display: flex;
  flex-direction: row;
  flex-shrink: 0;
  flex-grow: 0;
  @include flexCenter;
  &__img-wrapper {
    max-width: 80px;
    flex-shrink: 0;
    flex-grow: 0;
  }
  &__img {
    flex-shrink: 0;
    @include fitImage;
  }
  &__text {
    flex-shrink: 0;
    max-height: 90px;
    max-width: 170px;
    padding: 0 0 0 1rem;
    text-align: center;
  }
}

@include categoryItemMax520;
</style>

<script setup lang="ts">
import { computed } from 'vue'
import type { Category } from '@/types/common'
import { store } from '@/utils/store'

interface Props {
  category: Category
  index: number
}

const props = defineProps<Props>()

const setActive = () => {
  store.setActiveCatIndex(props.index)
}

const isActive = computed(() => {
  return props.index === store.getActiveCatIndex()
})
</script>

<template>
  <div
    class="category-item"
    :class="{'category-item_active': isActive}"
    @click="setActive"
  >
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
@use '../../styles/mixins' as *;
@use '../../styles/vars' as *;
@use '../../styles/categoryItem_max520' as *;

.category-item {
  display: flex;
  flex-direction: row;
  flex-shrink: 0;
  flex-grow: 0;
  @include flexCenter;
  cursor: pointer;
  &:hover {
    color: $accentColor;
    text-decoration: underline;
    box-shadow: 0 3px 12px rgba(149, 157, 165, 0.1);
  }
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
  &_active {
    color: $accentColor;
  }
}

@include categoryItemMax520;
</style>

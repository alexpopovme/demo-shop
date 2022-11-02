<script setup lang="ts">
import { watchEffect, ref, onUnmounted, onMounted, computed } from 'vue'
import type { CategoriesData } from '@/types/api'
import CategoryItem from './CategoryItem.vue'
import { debounce } from '@/utils'
import { store } from '@/utils/store'

interface Props {
  categoriesData: CategoriesData|void
}

const categoriesVisibility = computed(() => {
  return store.getCategoriesVisibility()
})
const props = defineProps<Props>()
const itemBasis = ref('260px')

const calcItemBasis = () => {
  const width = document.body.clientWidth
  if (!props.categoriesData || width <= 520) return
  const defaultBasis = 260
  const length = props.categoriesData.items.length
  const itemsPerRow = Math.floor(width / defaultBasis)

  if (length / itemsPerRow <= 1) {
    itemBasis.value = `${defaultBasis}px`
    return
  }

  const itemsHalfPerRow = Math.ceil(length / 2)
  const newBasis = width / itemsHalfPerRow
  itemBasis.value = `${newBasis <= 260 ? 260 : newBasis}px`
}
const resizeHandler = debounce(calcItemBasis, 300)

watchEffect(() => {
  if (props.categoriesData) calcItemBasis()
})

onMounted(() => {
  window.addEventListener('resize', resizeHandler)
})
onUnmounted(() => {
  window.removeEventListener('resize', resizeHandler)
})
</script>

<template>
  <Transition name="slide-fade">
    <nav class="cat-nav" v-show="categoriesVisibility" >
    <span
      class="cat-nav__loader"
      v-if="!categoriesData">
      Loading categories ...
    </span>
      <div
        class="cat-nav__items-wrapper"
        v-else>
        <div
          class="cat-nav__item-wrapper"
          v-for="(item, index) in categoriesData.items"
          :key="item.id"
        >
          <CategoryItem
            :category="item"
            :index="index"
          />
        </div>
      </div>
    </nav>
  </Transition>
</template>

<style lang="scss">
@use '../../styles/vars' as *;
@use '../../styles/categoriesNav_max520' as *;

$itemWrapperMargin: 1rem;

.cat-nav {
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid $mainBorderColor;
  &__items-wrapper {
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }
  &__item-wrapper {
    margin: $itemWrapperMargin;
    flex-basis: calc(v-bind('itemBasis') - $itemWrapperMargin * 2);
  }
}

@include categoriesNavMax520;

.slide-fade-enter-active {
  transition: all 0.2s ease-in;
}

.slide-fade-leave-active {
  transition: all 0.2s ease-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-30px);
  opacity: 0;
}
</style>

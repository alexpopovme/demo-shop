<script setup lang="ts">
interface Props {
  headerData: {
    name: string
    productCount: number
  }
}

const props = defineProps<Props>()
</script>

<template>
  <header class="cat-info">
     <div class="cat-info__wrap">
       <h1 class="cat-info__name">
         {{ headerData.name }}
       </h1>
     </div>
     <div class="cat-info__items">
       <span class="cat-info__items-num">
         {{ headerData.productCount }}
       </span>
       <span class="cat-info__items-text">
          items found
       </span>
     </div>
  </header>
</template>

<style lang="scss">
@use '../../styles/productHeader_max767' as *;

.cat-info {
  margin-bottom: 2rem;
  &__wrap {
    margin-bottom: 2rem;
  }
  &__name {
    font-size: 2.8rem;
  }
  &__items {
    font-size: 1.2rem;
  }
  &__items-num {
    font-weight: bold;
  }
}

@include productHeaderMax767;
</style>

<script setup lang="ts">
import MainLogo from '@/components/MainLogo.vue'
import CategoryButton from '@/components/category/CategoryButton.vue'
import BasketOpenButton from '@/components/basket/BasketOpenButton.vue'
</script>

<template>
<header class="main-header" >
  <MainLogo />
  <div class="main-header__right-wrap">
    <BasketOpenButton />
    <CategoryButton />
  </div>
</header>
</template>

<style lang="scss">
@use '../styles/vars' as *;

.main-header {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: $headerHeight;
  padding: 0.5rem $mainOffset;
  background-color: $mainGrey;
  &__right-wrap {
    display: flex;
    justify-content: flex-end;
    min-width: 130px;
  }
}
</style>

<script setup lang="ts">
import MainLogo from '@/components/MainLogo.vue'
import BasketOpenButton from '@/components/basket/BasketOpenButton.vue'
</script>

<template>
<header class="main-header" >
  <MainLogo />
  <BasketOpenButton />
</header>
</template>

<style lang="scss">
@use '../styles/vars' as *;

.main-header {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 80px;
  padding: 0.5rem $mainOffset;
  background-color: $mainGrey;
}
</style>

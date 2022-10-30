<script setup lang="ts">
import MainLogo from '@/components/MainLogo.vue'
import ShoppingBag from '@/components/ShoppingBag.vue'
</script>

<template>
<header class="main-header">
  <MainLogo />
  <ShoppingBag />
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
  background-color: #f3f5f6;
}

</style>

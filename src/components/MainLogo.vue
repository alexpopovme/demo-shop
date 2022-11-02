<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
const handleLogoClick = () => {
  router.push({ name: 'Home' })
}
</script>

<template>
  <div class="logo"
       @click="handleLogoClick">
    <img class="logo__img" src="@/assets/logo.png"
         alt="logo"
    />
  </div>
</template>

<style lang="scss">
@use '../styles/mixins' as *;

.logo {
  height: 100%;
  transition: transform 0.2s ease;
  cursor: pointer;
  &:hover {
    @include buttonHoverEffect;
  }
  &__img {
    @include fitImage;
  }
}
</style>

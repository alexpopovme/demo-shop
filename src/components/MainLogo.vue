<script setup lang="ts">

</script>

<template>
  <div class="logo">
    <img class="logo__img" src="@/assets/logo.png" alt="logo"/>
  </div>
</template>

<style lang="scss">
@use '../styles/mixins' as *;

.logo {
  height: 100%;
  &__img {
    @include fitImage;
  }
}
</style>

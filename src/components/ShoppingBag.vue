<script setup lang="ts">

</script>

<template>
  <div class="bag">
    <img class="bag__img" src="@/assets/bag.png" alt="bag"/>
    <div class="bag__counter">3</div>
  </div>
</template>

<style lang="scss">
@use '../styles/vars' as *;
@use '../styles/mixins' as *;

.bag {
  position: relative;
  height: 80%;
  margin: auto 0;
  &__counter {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    color: $accentColor;
    font-size: 1.1rem;
    padding-bottom: 0.1rem;
  }
  &__img {
    @include fitImage;
    opacity: 0.3;
  }
}
</style>

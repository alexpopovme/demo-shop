<script setup lang="ts">
import { ref } from 'vue'

const isHovering = ref(false)
</script>

<template>
  <div class="card-wrap"
       @mouseenter="isHovering = true"
       @mouseleave="isHovering = false">
    <el-card
      class="card-main"
      shadow="never"
    >
      <div class="card-image-wrap">
        <img
          src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
          class="card-main__image"
          alt=""
        />
      </div>
      <div class="card-info">
        <span class="card-info__text">
          Yummy hamburger
        </span>
        <span class="card-info__price">
          1418.00 €
        </span>
      </div>
      <footer class="card-footer" >
        <el-button type="info" round class="card-footer__button">
          Add to cart
        </el-button>
      </footer>
    </el-card>
  </div>
</template>

<style lang="scss">
@use '../styles/mixins' as *;

.card-wrap {
  transition: box-shadow 0.2s ease, transform 0.2s ease-out;
  &:hover {
    box-shadow: 0 8px 18px 6px rgba(19, 19, 19, 0.1);
    transform: translateY(-1.5em);
    & .card-footer {
      visibility: visible;
      opacity: 1;
    }
  }
}

.card-main {
  border: none;
}

.card-info {
  display: flex;
  flex-direction: column;
  @include flexCenter;
  &__text {
    font-weight: bold;
  }
  &__price {
    font-weight: bold;
    font-size: 1.5rem;
    padding: 1rem 0;
  }
}

.card-image-wrap {
  text-align: center;
}

.card-footer {
  text-align: center;
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s, opacity .4s ease-out;
}
</style>

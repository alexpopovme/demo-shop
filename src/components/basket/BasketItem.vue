<script setup lang="ts">
import type { Product } from '@/types/common'
import { store } from '@/utils/store'
import { computed } from 'vue'

interface Props {
  item: Product
  index: number
}

const props = defineProps<Props>()

const quantity = computed(() => {
  const itemInBasket = store.getItemsInBasket().find((item) => item.id === props.item.id)
  return itemInBasket ? itemInBasket.quantity : 0
})
</script>

<template>
<div class="basket-item">
  <div class="basket-item__image-wrap">
    <img
      class="basket-item__image"
      :src="item.thumbnailUrl"
      :alt="item.name"
    />
  </div>
  <div class="basket-item-info">
    <div class="basket-item-header">
      <span class="basket-item-header__number">
        {{ index + 1 }}
      </span>
      <span class="basket-item-header__name">
        {{ item.name }}
      </span>
      <button class="basket-item-header__delete"
        @click="store.removeAllQuantityFromBasket(item.id)"
        type="button"
      >
        &#9587;
      </button>
    </div>
    <div class="basket-item-body">
      <div class="basket-item-body__quantity">
        <span class="basket-item-body__quantity-text">
          Quantity
        </span>
        <div class="basket-item-body__quantity-cont">
          <span
            class="basket-item-body__quantity-item"
            @click="store.removeFromBasket(item.id)"
          >-</span>
          <span class="basket-item-body__quantity-item">{{ quantity }}</span>
          <span
            class="basket-item-body__quantity-item"
            @click="store.addToBasket(item.id)"
          >+</span>
        </div>
      </div>
      <div class="basket-item-body__price">
        <span class="basket-item-body__price-text">
          Price
        </span>
        <span class="basket-item-body__price-number">
          {{ item.defaultDisplayedPriceFormatted }}
        </span>
      </div>
    </div>
  </div>
</div>
</template>

<style lang="scss">
@use '../../styles/vars' as *;
@use '../../styles/mixins' as *;
@use '../../styles/basketItem_max520' as *;

.basket-item {
  display: flex;
  margin-bottom: 2.5rem;
  &__image-wrap {
    width: 140px;
    height: 140px;
    margin: 0 1.5rem 0 0;
  }
  &__image {
    @include fitImage;
  }
}

.basket-item-info {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.basket-item-header {
  display: flex;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  border-bottom: 1px $mainBorderColor solid;
  line-height: 2rem;
  &__number {
    font-size: 1.1rem;
    font-weight: bold;
    margin-right: 1rem;
  }
  &__name {
    flex-grow: 1;
  }
  &__delete {
    font-size: 1rem;
    color: $accentColor;
    background: none;
    border: none;
    padding: 0 0.3rem;
    cursor: pointer;
    margin-left: 0.8rem;
  }
}

.basket-item-body {
  display: flex;
  justify-content: space-between;
  &__quantity,
  &__price {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  &__quantity-text,
  &__price-text {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }
  &__quantity-item {
    display: inline-block;
    line-height: 28px;
    font-size: 1.1rem;
    text-align: center;
    width: 30px;
    height: 30px;
    border: 1px $mainBorderColor solid;
    border-radius: 3px;
    cursor: pointer;
    user-select: none;
    &:nth-child(2) {
      font-size: 1rem;
      font-weight: bold;
      margin: 0 0.25rem;
      cursor: auto;
    }
  }
}

@include basketItemMax520;
</style>

<script setup lang="ts">
import { computed, ref, watchEffect } from 'vue'
import BasketItem from '@/components/BasketItem.vue'
import { getProductsByIDs } from '@/utils/api'
import { store } from '@/utils/store'
import type { Product } from '@/types/common'

const currency = '₽'
const purchased = ref(false)
const requestedItems = ref<Product[]>([])
const requestedItemsN = ref(0)

const updateWithoutRequest = (arr: []|Product[]) => {
  requestedItems.value = arr
  requestedItemsN.value = arr.length
}
const total = computed(() => {
  const basketItems = store.getItemsInBasket()
  return basketItems.reduce((acc, item) => {
    const requestedItem = requestedItems.value.find((entry) => entry.id === item.id)
    if (!requestedItem) return acc
    return acc += item.quantity * requestedItem.price
  }, 0)
})
const handlePurchase = () => {
  store.emptyBasket()
  purchased.value = true
}

watchEffect(() => {
  const basketItems = store.getItemsInBasket()

  if (basketItems.length === 0) {
    updateWithoutRequest([])
    return
  }

  if (requestedItems.value.length >= basketItems.length) {
    // delete item case
    const updated = requestedItems.value
      .filter((rItem) => basketItems.some((bItem) => bItem.id === rItem.id))
    updateWithoutRequest(updated)
    return
  }

  requestedItemsN.value = basketItems.length

  getProductsByIDs(basketItems)
    .then((data) => {
      if (!data) return
      requestedItems.value = data.items
    })
})

// Congratulations on your Purchase
</script>

<template>
  <header class="basket-header">
    <div
      v-if="purchased"
      class="basket-congrats-text-wrap"
    >
      <span class="basket-congrats-text">
        Congratulations on your purchase!
      </span>
    </div>
    <span
      v-else
      class="basket-header__text"
    >
      You have {{ requestedItemsN }} item in your basket
    </span>
  </header>
  <main class="basket-main" >
    <div class="basket-main__inner">
      <BasketItem
        v-for="(item, index) in requestedItems"
        :key="item.id"
        :item="item"
        :index="index"
      />
      <div class="basket-total" v-if="total > 0">
        <span class="basket-total__text">TOTAL:</span>
        <span class="basket-total__num">{{ total }}{{ currency }}</span>
      </div>
      <div
        class="basket-checkout-button-wrap"
        v-if="total > 0"
      >
        <button
          class="basket-checkout-button"
          type="button"
          @click="handlePurchase"
        >
          Go to checkout
        </button>
      </div>
      <div
        v-if="purchased"
        class="basket-congrats-image-wrap"
      >
        <img
          class="basket-congrats-image"
          src="../assets/thanks.png"
          alt="Thank you"
        />
      </div>
    </div>
  </main>
</template>

<style lang="scss">
@use '../styles/vars' as *;
@use '../styles/mixins' as *;
$basketContentPadding: 2rem $mainOffset;

.basket-header {
  display: flex;
  align-items: center;
  padding: $basketContentPadding;
  &__text {
    font-size: 1.3rem;
  }
}
.basket-main {
  display: flex;
  flex-direction: column;
  background: linear-gradient(to bottom, $mainGrey, white);
  &__inner {
    padding: $basketContentPadding;
  }
}
.basket-total {
  display: flex;
  justify-content: space-between;
  padding: 0.8rem 2rem;
  font-size: 1.2rem;
  font-weight: bold;
  border-radius: 8rem;
  background-color: rgba($accentColor, 0.15);
}
.basket-checkout-button-wrap {
  margin-top: 1rem;
}
.basket-checkout-button {
  width: 100%;
  padding: 0.8rem 2rem;
  border-radius: 8rem;
  font-size: 1.2rem;
  font-weight: bold;
  outline: none;
  border: 1px $mainBorderColor solid;
  background: none;
  cursor: pointer;
  color: inherit;
  transition: background-color ease 0.2s;
  &:hover {
    background-color: $mainColor;
    color: white
  }
}
.basket-congrats-image-wrap,
.basket-congrats-text-wrap {
  flex-grow: 1;
  text-align: center;
  font-size: 1.3rem;
}
.basket-congrats-image {
  opacity: 0.8;
  @include fitImage;
  max-width: 220px;
}
</style>

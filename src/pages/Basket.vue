<script setup lang="ts">
import { computed, ref, watchEffect } from 'vue'
import { useRouter } from 'vue-router'
import BasketItem from '@/components/basket/BasketItem.vue'
import BasketHeader from '@/components/basket/BasketHeader.vue'
import BasketBuyButton from '@/components/basket/BasketBuyButton.vue'
import BasketPurchased from '@/components/basket/BasketPurchased.vue'
import BasketTotal from '@/components/basket/BasketTotal.vue'
import { getProductsByIDs } from '@/utils/api'
import { store } from '@/utils/store'
import type { Product } from '@/types/common'

const router = useRouter()
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
    if (!purchased.value) {
      router.push({ path: '/' })
    }
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

</script>

<template>
  <BasketHeader
    :requestedItemsN="requestedItemsN"
    :purchased="purchased"
  />
  <main class="basket-main" >
    <div class="basket-main__inner">
      <BasketItem
        v-for="(item, index) in requestedItems"
        :key="item.id"
        :item="item"
        :index="index"
      />
      <BasketTotal :total="total"/>
      <BasketBuyButton
        :total="total"
        @clicked:buy-now="handlePurchase"
      />
      <BasketPurchased :purchased="purchased"/>
    </div>
  </main>
</template>

<style lang="scss">
@use '../styles/vars' as *;
@use '../styles/mixins' as *;


.basket-main {
  min-width: 440px;
  display: flex;
  flex-direction: column;
  background: linear-gradient(to bottom, $mainGrey, white);
  &__inner {
    padding: $basketContentPadding;
  }
}
</style>

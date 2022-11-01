<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { store } from '@/utils/store'
import { sanitizeStr } from '@/utils'
import { getProductByIDs } from '@/utils/api'
import type { Product } from '@/types/common'
import ProductInfo from '@/components/product/ProductInfo.vue'
import ButtonAddToBasket from '@/components/product/ButtonAddToBasket.vue'

interface Props {
  id: number
}

const props = defineProps<Props>()
const product = ref<Product|null>()

watchEffect(() => {
  const activeProduct = store.getActiveProduct()
  if (activeProduct?.id === props.id) {
    product.value = store.getActiveProduct()
    return
  }
  // fetch product in case of loading from direct url with id
  // that is not equal to the current activeProduct in store
  getProductByIDs(props.id)
    .then((data) => {
      product.value = data
      if (product.value) {
        store.setActiveProduct(product.value)
      }
    })
})
</script>

<template>
  <section class="product container" v-if="product">
    <div class="product__row">
      <div class="product__image-wrap">
        <img class="product__image"
          :src="product.hdThumbnailUrl"
          :alt="product.name"
        />
      </div>
      <div class="product__info-wrap">
        <ProductInfo
          :name="product.name"
          :price-formatted="product.defaultDisplayedPriceFormatted"
        />
        <ButtonAddToBasket :id="product.id"/>
      </div>
    </div>
    <div class="product__description-wrap">
      <p class="product-description"
         v-html="sanitizeStr(product.description)"
      >
      </p>
    </div>
  </section>
</template>

<style lang="scss">
@use '../styles/vars' as *;
@use '../styles/mixins' as *;
@use '../styles/product_max520' as *;

.product {
  &__row {
    display: flex;
    justify-content: space-between;
  }
  &__image-wrap {
    display: flex;
    justify-content: center;
    flex-basis: 100%;
  }
  &__image {
    @include fitImage;
    max-width: 400px;
    flex-shrink: 0;
  }
  &__info-wrap {
    flex-basis: 35%;
    min-width: 180px;
    padding-top: 1rem;
    margin-left: 1rem;
    & .product-info {
      align-items: start;
    }
    & .product-info__price {
      color: $accentColor;
    }
  }
  &__description-wrap {
    margin-top: 1rem;
  }
}

@include productMax520;
</style>

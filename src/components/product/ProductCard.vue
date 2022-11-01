<script setup lang="ts">
import { ref } from 'vue'
import type { Product } from '@/types/common'
import ButtonAddToBasket from '@/components/product/ButtonAddToBasket.vue'
import ProductInfo from '@/components/product/ProductInfo.vue'

interface Props {
  item: Product
}

const props = defineProps<Props>()
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
      <div class="card-main__image-wrap">
        <img
          class="card-main__image"
          :data-id="item.id"
          :src="item.thumbnailUrl"
          :alt="item.name"
        />
      </div>
      <ProductInfo
        :name="item.name"
        :price-formatted="item.defaultDisplayedPriceFormatted"
      />
      <footer class="card-footer" >
        <ButtonAddToBasket :id="item.id"/>
      </footer>
    </el-card>
  </div>
</template>

<style lang="scss">
@use '../../styles/mixins' as *;

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
  &__image-wrap {
    text-align: center;
  }
  &__image {
    @include fitImage;
  }
}

.card-footer {
  text-align: center;
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s, opacity .4s ease-out;
}
</style>

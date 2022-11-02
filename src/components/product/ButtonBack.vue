<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <el-button
    class="button-back"
    type="info"
    round
    @click="router.back()"
  >
    Back
  </el-button>
</template>

<style lang="scss">
@use '../../styles/vars' as *;

.el-button + .el-button {
  margin: 1rem 0 0;
}
.button-back {
  width: $productButtonsWidth;
  background: none;
  color: $mainColor;
  &::before {
    content: "\2190";
    margin-right: 0.8rem;
    transition: transform 0.4s ease;

  }
  &:hover {
    background: none;
    color: $mainColor;
    &::before {
      transform: translateX(-8px)
    }
  }
}
</style>

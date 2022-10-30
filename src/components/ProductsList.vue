<script setup lang="ts">
import ProductItem from '@/components/ProductItem.vue'

</script>

<template>
  <el-row>
    <el-col
      :xs="24" :sm="12" :lg="8" :xl="6"
      v-for="(o, index) in 8"
      :key="o"
      :offset="0"
    >
      <ProductItem />
    </el-col>
  </el-row>
</template>

<style lang="scss">

</style>

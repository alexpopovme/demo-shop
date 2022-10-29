<script setup lang="ts">
interface Props {
  id: string
}

const props = defineProps<Props>()
</script>

<template>
Product {{ id }}
</template>

<style lang="scss">

</style>

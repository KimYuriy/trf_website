<template>
  <p
    class="text-uppercase text-center font-weight-bold custom-font"
    :class="textStyle"
  >
    <rich-text :text="text" />
  </p>
</template>

<script setup lang="ts">
import RichText from '@/components/pages/home/ui/common/RichText.vue';

withDefaults(
  defineProps<{
    text: string;
    textStyle?: string;
  }>(),
  {
    textStyle: 'text-h4'
  }
);
</script>

<style scoped lang="scss">
@import "@/components/styles/index";
</style>
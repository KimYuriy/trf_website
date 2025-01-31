<template>
  <p
    class="text-uppercase text-center font-weight-bold custom-font"
    :class="textStyle"
  >
    {{ text }}
  </p>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    text: string,
    textStyle?: string
  }>(),
  {
    textStyle: 'text-h4'
  }
);
</script>

<style scoped>
.custom-font {
  font-family: 'Bahnschrift';
}
</style>
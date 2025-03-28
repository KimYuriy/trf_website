<template>
  <div v-html="text" />
</template>

<script setup lang="ts">
defineProps<{
  text: string;
}>();
</script>

<style>
a {
  color: white;
}
</style>
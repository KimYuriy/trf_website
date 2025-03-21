<template>
  <div v-html="formattedText"/>
</template>

<script setup lang="ts">
const props = defineProps<{
  text: string;
}>();

const formatString = (input: string): string => input.replace(/&nbsp;/g, ' ');

const formattedText = formatString(props.text);
</script>

<style>
a {
  color: white;
}
</style>
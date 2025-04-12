<template>
  <v-footer class="bg-transparent">
    <v-row
      justify="center"
      no-gutters
    >
      <v-col
        class="text-center text-white text-uppercase my-2"
        cols="12"
      >
        <b><rich-text :text="title"/></b>
        <span>{{ `2024 - ${new Date().getFullYear()}` }}</span>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script setup lang="ts">
import RichText from "@/components/pages/home/ui/common/RichText.vue"

withDefaults(
  defineProps<{
    title?: string;
  }>(),
  {
    title: 'Тактикул.РФ'
  }
);
</script>
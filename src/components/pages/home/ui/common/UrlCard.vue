<template>
  <v-card
    target="_blank"
    :max-height="maxWidth * 2"
    :max-width="maxWidth"
    :href="data.url"
  >
    <v-img
      cover
      :src="data.logo"
    />
    <v-card-title
      class="text-h5 text-pre-line text-center"
      v-text="data.name"
    />
    <v-card-text
      class="text-body-1 text-center"
      v-text="data.description"
    />
  </v-card>
</template>
  
<script setup lang="ts">
import type { DataUrlModel } from '@/components/pages/home/model/all_data';

withDefaults(
  defineProps<{
    data: DataUrlModel;
    maxWidth?: number
  }>(),
  {
    maxWidth: 300
  }
);
</script>
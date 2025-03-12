<template>
  <v-card
    variant="text"
    :max-height="maxWidth * 2"
    :max-width="maxWidth"
  >
    <a
      target="_blank"
      :href="data.url"
    >
      <v-img
        cover
        :src="data.logo"
      />
    </a>
    <v-card-title
      class="text-h5 text-pre-line text-center"
      v-text="data.name"
    />
  </v-card>
</template>
  
<script setup lang="ts">
import type { DataModel } from '@/components/pages/home/model/all_data';

withDefaults(
  defineProps<{
    data: DataModel;
    maxWidth?: number
  }>(),
  {
    maxWidth: 300
  }
);
</script>
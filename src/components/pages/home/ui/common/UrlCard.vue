<template>
  <v-card
    target="_blank"
    :max-height="800"
    :max-width="400"
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

defineProps<{
  data: DataUrlModel
}>();
</script>
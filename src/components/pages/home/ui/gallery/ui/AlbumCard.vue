<template>
  <v-card
    max-width="400"
    target="_blank"
    :href="album.url"
  >
    <v-img
      class="align-end"
      cover
      :src="album.logo"
    >
      <v-card-title
        class="text-h5 text-white text-pre-line"
        v-text="album.name"
      />
      <v-card-text
        class="text-white text-body-1"
        v-text="album.description"
      />
    </v-img>
  </v-card>
</template>

<script setup lang="ts">
import type { DataUrl } from '@/components/pages/home/model/all_data';

defineProps<{
  album: DataUrl
}>();
</script>
<template>
  <v-card
    max-width="500"
    target="_blank"
    :href="album.url"
  >
    <v-img
      class="align-end"
      cover
      aspect-ratio="1"
      :src="album.logo.url"
    >
      <v-card-title class="text-h5 text-white text-pre-line">
        <rich-text :text="album.name" />
      </v-card-title>
      <v-card-text
        v-if="album.description.length" 
        class="text-white text-body-1"
      >
        <rich-text :text="album.description" />
      </v-card-text>
    </v-img>
  </v-card>
</template>

<script setup lang="ts">
import type { DataModel } from '@/components/pages/home/model/all_data';
import RichText from '@/components/pages/home/ui/common/RichText.vue';

defineProps<{
  album: DataModel;
}>();
</script>
<template>
  <v-container class="my-5">
    <custom-title text="Галерея" />
    <v-carousel
      class="mt-4 pa-3"
      height="425"
      hide-delimiters
      cycle
      interval="6000"
      :style="{ backgroundImage: `url(${data.backgroundImg})`, backgroundSize: 'cover' }"
    >
      <v-carousel-item v-for="album in data.albums">
        <album-card :album="album" />
      </v-carousel-item>
    </v-carousel>
  </v-container>
</template>

<script setup lang="ts">
import type { GalleryDataModel } from '@/components/pages/home/model/all_data';
import AlbumCard from '@/components/pages/home/ui/gallery/ui/AlbumCard.vue';
import CustomTitle from '@/components/pages/home/ui/common/CustomTitle.vue';

defineProps<{
  data: GalleryDataModel
}>();
</script>
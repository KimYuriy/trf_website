<template>
  <v-container
    class="ma-0 pa-0 mt-11"
    fluid
  >
    <custom-title text="Галерея" />
    <v-carousel
      v-model="currentIndex"
      class="mt-4 pa-3"
      height="525"
      hide-delimiters
      cycle
      :style="{
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: 'cover'
      }"
    >
      <v-carousel-item v-for="album in albums">
        <album-card :album="album" />
      </v-carousel-item>
    </v-carousel>
  </v-container>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import type { PhotoAlbumModel } from '@/components/pages/home/model/all_data';
import AlbumCard from '@/components/pages/home/ui/gallery/ui/AlbumCard.vue';
import CustomTitle from '@/components/pages/home/ui/common/CustomTitle.vue';

const props = defineProps<{
  albums: PhotoAlbumModel[];
}>();

const currentIndex = ref<number>(0);

const backgroundImageUrl = ref<string>(props.albums[currentIndex.value].background.url);

watch(
  currentIndex,
  () => {
    backgroundImageUrl.value = props.albums[currentIndex.value].background.url;
  }
);

onMounted(() => backgroundImageUrl.value = props.albums[0].background.url);
</script>
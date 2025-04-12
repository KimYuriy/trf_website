<template>
  <v-container
    class="ma-0 pa-0 mt-10"
    fluid
  >
    <custom-title text="Социальные сети" />
    <div :class="mdAndUp? `${socials.length > 5 ? 'grid-container' : ''}` : ''">
      <social-media-card
        v-for="media in socials"
        :media="media"
      />
    </div>
  </v-container>
</template>

<script setup lang="ts">
import { useDisplay } from 'vuetify';
import type { DataModel } from '@/components/pages/home/model/all_data';
import CustomTitle from '@/components/pages/home/ui/common/CustomTitle.vue';
import SocialMediaCard from '@/components/pages/home/ui/socialmedia/ui/socialmedia-card/SocialMediaCard.vue';

const { mdAndUp } = useDisplay();

defineProps<{
  socials: DataModel[];
}>();
</script>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}
</style>
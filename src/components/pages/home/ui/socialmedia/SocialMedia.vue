<template>
  <v-container
    class="ma-0 pa-0 my-5"
    fluid
  >
    <custom-title text="Социальные сети" />
      <social-media-card
        v-for="media in socials"
        :media="media"
      />
  </v-container>
</template>
<script setup lang="ts">
import type { DataModel } from '@/components/pages/home/model/all_data';
import CustomTitle from '@/components/pages/home/ui/common/CustomTitle.vue';
import SocialMediaCard from '@/components/pages/home/ui/socialmedia/ui/socialmedia-card/SocialMediaCard.vue';

defineProps<{
  socials: DataModel[]
}>();
</script>
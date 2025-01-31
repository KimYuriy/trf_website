<template>
  <v-container class="my-5">
    <custom-title text="Социальные сети" />
    <v-row class="mt-5">
      <v-col
        v-for="media in socials"  
        cols="12"
        sm="6"
        md="4"
        lg="4"
      >
        <url-card :data="media" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import type { DataUrl } from '@/components/pages/home/model/all_data';
import UrlCard from '@/components/pages/home/ui/common/UrlCard.vue';
import CustomTitle from '@/components/pages/home/ui/common/CustomTitle.vue';

defineProps<{
  socials: DataUrl[]
}>();
</script>
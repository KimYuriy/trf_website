<template>
  <v-container>
    <custom-title
      text-style="text-h2 my-5"
      :text="info.name"
    />
    <v-card-text class="text-h6 text-justify">
      {{ info.description }}
    </v-card-text>
  </v-container>
</template>

<script setup lang="ts">
import type { ShortDataModel } from '@/components/pages/home/model/all_data';
import CustomTitle from '@/components/pages/home/ui/common/CustomTitle.vue';

defineProps<{
  info: ShortDataModel
}>()
</script>
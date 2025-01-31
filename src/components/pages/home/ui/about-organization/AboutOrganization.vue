<template>
  <v-container>
    <custom-title
      text-style="text-h2 my-5"
      :text="info.name"
    />
    <!-- <div class="d-flex justify-space-between mb-5"> -->
      <!-- <v-avatar
        class="mr-5"
        rounded="0"
        size="250"
      >
        <v-img
          height="250"
          alt="Логотип организации"
          :src="info.logo"
        />
      </v-avatar> -->
      <v-card-text class="text-h6 text-justify">
        {{ info.description }}
      </v-card-text>
    <!-- </div> -->
  </v-container>
</template>

<script setup lang="ts">
import type { Data } from '@/components/pages/home/model/all_data';
import CustomTitle from '@/components/pages/home/ui/common/CustomTitle.vue';

defineProps<{
  info: Data
}>()
</script>
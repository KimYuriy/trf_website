<template>
  <v-card
    class="card d-flex flex-column align-center justify-center"
    :class="index % 2 === 0 ? '' : 'flex-column-reverse'"
    variant="text"
    max-width="200"
  >
    <a
      target="_blank"
      :href="partner.url"
    >
      <v-img
        cover
        aspect-ratio="1"
        :src="partner.logo.url"
        width="200"
      />
    </a>
    <div>
      <p class="mt-3 text-h5 text-center">
        {{ partner.name }}
      </p>
      <p class="mt-3 text-body-1 text-justify">
          {{ partner.description }}
      </p>
    </div>
  </v-card>
</template>

<script setup lang="ts">
import type { DataModel } from '@/components/pages/home/model/all_data';

defineProps<{
  partner: DataModel;
  index: number;
}>();
</script>

<style scoped>
.card {
  width: fit-content;
}
</style>
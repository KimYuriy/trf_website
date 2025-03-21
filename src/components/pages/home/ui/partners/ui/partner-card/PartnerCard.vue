<template>
  <v-card
    class="card d-flex flex-column align-center justify-space-between"
    :class="index % 2 === 0 ? '' : 'flex-column-reverse'"
    variant="text"
    :max-width="cardWidth"
  >
    <a
      target="_blank"
      :href="partner.url"
    >
      <v-img
        cover
        aspect-ratio="1"
        :src="partner.logo.url"
        :width="cardWidth"
      />
    </a>
    <div :class="index % 2 === 0 ? 'mt-3' : 'mb-3'">
      <p class="text-h5 text-center">
        <rich-text :text="partner.name" />
      </p>
      <p class="mt-3 text-body-1 text-justify">
        <rich-text :text="partner.description" />
      </p>
    </div>
  </v-card>
</template>

<script setup lang="ts">
import type { DataModel } from '@/components/pages/home/model/all_data';
import RichText from '@/components/pages/home/ui/common/RichText.vue';

defineProps<{
  partner: DataModel;
  index: number;
}>();

const cardWidth = 200;
</script>

<style scoped>
.card {
  width: fit-content;
}
</style>
<template>
  <v-card
    class="d-flex my-5 w-100"
    :class="smAndUp ? `${index % 2 === 0 ? 'flex-row-reverse' : ''}` : 'flex-column align-center'"
    variant="text"
  >
    <v-img
      :class="smAndUp && index % 2 === 0 ? 'ml-5' : 'mr-5'"
      aspect-ratio="16/9"
      :alt="event.name"
      :width="smAndUp ? 300 : 500"
      :src="event.img.url"
      :style="smAndUp ? {
        'mask-image': `linear-gradient(to ${index % 2 === 0 ? 'left' : 'right'}, black, transparent)`,
      } : {}"
    />
    <div
      class="w-100 d-flex flex-column"
      :class="smAndUp ? `${index % 2 === 0 ? 'align-end' : 'align-start'}` : ''"
    >
      <p
        class="text-h4"
        :class="{ 'text-center mt-2': !smAndUp }"
      >
        <rich-text :text="event.name"/>
      </p>
      <p class="text-h6 text-justify">
        <rich-text :text="event.shortDescription"/>
      </p>
    </div>
  </v-card>
</template>

<script setup lang="ts">
import { useDisplay } from 'vuetify';
import type { EventModel } from '@/components/pages/home/model/all_data';
import RichText from '@/components/pages/home/ui/common/RichText.vue';

defineProps<{
  event: EventModel;
  index: number;
}>();

const { smAndUp } = useDisplay();
</script>
<template>
  <v-card
    class="d-flex my-5 w-100"
    :class="smAndUp ? `${index % 2 === 0 ? '' : 'flex-row-reverse'}` : 'flex-column align-center'"
    variant="text"
  >
    <v-img
      :class="smAndUp && index % 2 === 0 ? 'mr-5' : 'ml-5'"
      cover
      :alt="event.name"
      :width="smAndUp ? 300 : 500"
      aspect-ratio="16/9"
      :gradient="smAndUp ? `to ${index % 2 == 0 ? 'right' : 'left'}, rgba(0,0,0,.0), rgba(48,48,48,1)` : ''"
      :src="event.img"
    />
    <div class="w-100">
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
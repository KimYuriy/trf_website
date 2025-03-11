<template>
 <v-card
    class="d-flex justify-space-between my-5"
    :class="smAndUp? `${index % 2 === 0 ? '' : 'flex-row-reverse'}` : 'flex-column align-center'"
    variant="text"
  >
    <v-img
      :class="smAndUp && index % 2 === 0 ? 'mr-5' : 'ml-5'"
      cover
      :alt="event.name"
      :width="smAndUp ? 300 : 500"
      :gradient="smAndUp? `to ${index % 2 == 0 ? 'right' : 'left'}, rgba(0,0,0,.0), rgba(48,48,48,1)`: ''"
      :src="event.img"
    />
    <div>
      <v-card-title
        class="text-h4"
        :class="!smAndUp? 'text-center' : ''"
      >
        {{ event.name }}
      </v-card-title>
      <v-card-text class="text-h6 text-justify">
        {{ event.shortDescription }}
      </v-card-text>
    </div>
  </v-card>
</template>

<script setup lang="ts">
import { useDisplay } from 'vuetify';
import type { EventModel } from '@/components/pages/home/model/all_data';

defineProps<{
  event: EventModel;
  index: number;
}>();

const { smAndUp } = useDisplay();
</script>
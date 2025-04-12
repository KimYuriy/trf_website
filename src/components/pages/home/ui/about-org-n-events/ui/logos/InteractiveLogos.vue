<template>
  <v-container fluid>
    <v-col align="center">
      <v-col cols="3">
        <image-logo
          :event="events.find(event => event.logo.position === 'top')"
          @event-clicked="(id: number) => emit('eventClicked', id)"
        />
      </v-col>
      <v-row
        class="ma-0 pa-0"
        align="end"
        justify="center"
      >
        <v-col cols="3">
          <image-logo
            :event="events.find(event => event.logo.position === 'left')"
            @event-clicked="(id: number) => emit('eventClicked', id)"
          />
        </v-col>
        <v-col
          class="pb-16"
          cols="5"
        >
          <image-logo
            :event="events.find(event => event.logo.position === 'center')"
            @event-clicked="(id: number) => emit('eventClicked', id)"
          />
        </v-col>
        <v-col cols="3">
          <image-logo
            :event="events.find(event => event.logo.position === 'right')"
            @event-clicked="(id: number) => emit('eventClicked', id)"
          />
        </v-col>
      </v-row>
    </v-col>
  </v-container>
</template>

<script setup lang="ts">
import type { EventModel } from '@/components/pages/home/model/all_data';
import ImageLogo from '@/components/pages/home/ui/about-org-n-events/ui/logos/Logo.vue';

defineProps<{
  events: EventModel[];
}>();

const emit = defineEmits<{
  eventClicked: [id: number];
}>();
</script>
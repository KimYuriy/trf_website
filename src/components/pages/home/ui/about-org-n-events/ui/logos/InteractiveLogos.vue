<template>
  <v-container fluid>
    <v-col
      align="center"
      justify="center"
    >
      <v-col cols="3">
        <glitch-logo
          tooltip-location="end"
          :event="events.find(event => event.logo.position === 'top')"
          @event-clicked="eventClicked"
        />
      </v-col>
      <v-row
        class="ma-0 pa-0"
        align="end"
        justify="center"
      >
        <v-col cols="3">
          <glitch-logo
            tooltip-location="top"
            :event="events.find(event => event.logo.position === 'left')"
            @event-clicked="eventClicked"
          />
        </v-col>
        <v-col
          class="pb-16"
          cols="5"
        >
          <glitch-logo
            tooltip-location="bottom"
            :event="events.find(event => event.logo.position === 'center')"
            @event-clicked="eventClicked"
          />
        </v-col>
        <v-col cols="3">
          <glitch-logo
            tooltip-location="top"
            :event="events.find(event => event.logo.position === 'right')"
            @event-clicked="eventClicked"
          />
        </v-col>
      </v-row>
    </v-col>
  </v-container>
</template>

<script setup lang="ts">
import type { EventModel } from '@/components/pages/home/model/all_data';
import GlitchLogo from '@/components/pages/home/ui/about-org-n-events/ui/logos/GlitchLogo.vue';

defineProps<{
  events: EventModel[];
}>();

const emit = defineEmits<{
  eventClicked: [id: number];
}>();

const eventClicked = (id: number) => emit('eventClicked', id);
</script>
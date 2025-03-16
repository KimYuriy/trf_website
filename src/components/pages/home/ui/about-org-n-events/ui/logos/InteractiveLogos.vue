<template>
  <v-container fluid>
    <v-col
      align="center"
      justify="center"
    >
          <v-col cols="3">
            <glitch-logo
              tooltip-location="end"
              :event="dvudulka"
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
              :event="edc"
              @event-clicked="eventClicked"
            />
          </v-col>
          <v-col
            class="pb-16"
            cols="5"
          >
            <glitch-logo
              tooltip-location="bottom"
              :event="zh"
              @event-clicked="eventClicked"
            />
          </v-col>
          <v-col cols="3">
            <glitch-logo
              tooltip-location="top"
              :event="rus"
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

interface ILogos {
  zh: EventModel;
  edc: EventModel;
  dvudulka: EventModel;
  rus: EventModel;
}

defineProps<ILogos>();

const emit = defineEmits<{
  eventClicked: [id: number]
}>();

const eventClicked = (id: number) => emit('eventClicked', id);
</script>
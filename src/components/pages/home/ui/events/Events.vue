<template >
  <v-container class="my-5">
    <custom-title text="Наши мероприятия" />
    <v-row
      v-if="!smAndUp"
      class="pa-0 mt-4 mb-8 justify-space-between"
    >
      <v-img
        v-for="event in events"
        class=" my-0 pa-0"
        :class="mdAndDown? 'mx-2' : ''"
        max-height="250"
        :src="event.logo"
        @click="scrollToEvent(event.id)"
      />
    </v-row>
    <v-expansion-panels variant="accordion">
      <v-expansion-panel
        v-for="(event, index) in events"
        class="bg-transparent"
        hide-actions
        elevation="0"
        :id="event.id"
      >
        <v-expansion-panel-title class="ma-0 pa-0">
          <event-card
            :event="event"
            :index="index"
          />
        </v-expansion-panel-title>
        <v-expansion-panel-text class="text-body-1 text-justify">
          {{ event.longDescription }}
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-container>
</template>

<script setup lang="ts">
import { useDisplay } from 'vuetify';
import type { EventModel } from '@/components/pages/home/model/all_data';
import CustomTitle from '@/components/pages/home/ui/common/CustomTitle.vue';
import EventCard from '@/components/pages/home/ui/events/ui/event-card/EventCard.vue';

defineProps<{
  events: EventModel[]
}>();

const { mdAndDown, smAndUp } = useDisplay();

const scrollToEvent = (sectionId: number) => {
  const element = document.getElementById(sectionId.toString());
  if (element) {
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - 70;
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }
};
</script>
<template >
  <v-container class="my-5">
    <custom-title text="Наши мероприятия" />
    <v-row class="pa-0 mt-4 mb-8 justify-space-between">
      <v-img
        v-for="event in events"
        height="250"
        :src="event.logo"
        @click="scrollToEvent(event.id)"
      />
    </v-row>
    <event-card
      v-for="(event, index) in events"
      :id="event.id"
      :event="event"
      :index="index"
    />
  </v-container>
</template>

<script setup lang="ts">
import EventCard from '@/components/pages/home/ui/events/ui/event-card/EventCard.vue';
import type { LongDataModel } from '@/components/pages/home/model/all_data';
import CustomTitle from '@/components/pages/home/ui/common/CustomTitle.vue';

defineProps<{
  events: LongDataModel[]
}>();

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
<template >
  <v-container class="my-5">
    <custom-title text="Наши мероприятия" />
    <v-row class="pa-0 mt-4 mb-8 justify-space-between">
      <v-img
        v-for="event in events"
        height="250"
        :src="event.logo"
      />
    </v-row>
    <event-card
      v-for="(event, index) in events"
      :event="event"
      :index="index"
    />
  </v-container>
</template>

<script setup lang="ts">
import EventCard from '@/components/pages/home/ui/events/ui/event-card/EventCard.vue';
import type { DataLong } from '@/components/pages/home/model/all_data';
import CustomTitle from '@/components/pages/home/ui/common/CustomTitle.vue';

defineProps<{
  events: DataLong[]
}>();
</script>
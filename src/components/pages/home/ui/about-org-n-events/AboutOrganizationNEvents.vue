<template>
  <v-container
    class="ma-0 pa-0"
    fluid
  >
    <div id="about">
      <custom-title
        :class="smAndUp? 'text-h2' : 'text-h4'"
        text-style="mt-5"
        :text="info.name"
      />
      <v-row
        v-if="events.length > 0 && smAndUp"
        align="center"
        justify="center"
      >
        <v-col cols="10">
          <interactive-logos
            :events="events"
            @event-clicked="scrollToEvent"
          />
        </v-col>
      </v-row>
      <v-card-text class="mt-2 text-h6 text-justify">
        <rich-text :text="info.description" />
      </v-card-text>
    </div>
    <div
      v-if="events.length > 0"
      class="my-5"
      id="events"
    >
      <custom-title
        class="mt-10"
        text="Наши мероприятия"
      />
      <v-row
        v-if="!smAndUp"
        class="pa-0 mt-4 mb-8 justify-space-between"
      >
        <v-img
          v-for="event in events"
          class=" my-0 pa-0"
          :class="mdAndDown? 'mx-2' : ''"
          max-height="250"
          :src="event.logo.url"
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
            <rich-text :text="event.longDescription"/>
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
  </v-container>
</template>

<script setup lang="ts">
import { useDisplay } from 'vuetify';
import type { AboutModel, EventModel } from '@/components/pages/home/model/all_data';
import CustomTitle from '@/components/pages/home/ui/common/CustomTitle.vue';
import InteractiveLogos from '@/components/pages/home/ui/about-org-n-events/ui/logos/InteractiveLogos.vue';
import EventCard from '@/components/pages/home/ui/about-org-n-events/ui/event-card/EventCard.vue';
import RichText from '@/components/pages/home/ui/common/RichText.vue';

defineProps<{
  info: AboutModel;
  events: EventModel[];
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
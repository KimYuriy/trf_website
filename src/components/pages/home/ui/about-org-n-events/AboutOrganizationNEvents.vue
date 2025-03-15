<template>
  <v-container
    class="ma-0 pa-0"
    fluid
  >
    <div id="about">
      <custom-title
        text-style="my-5"
        :class="smAndUp? 'text-h2' : 'text-h4'"
        :text="info.name"
      />
      <!--TODO: Отцентрировать -->
      <v-row
        v-if="smAndUp"
        class="my-5"
        align="center"
        justify="center"
      >
        <v-col cols="10">
          <interactive-logos
            :zh="events.zh"
            :edc="events.edc"
            :rus="events.rus"
            :dvudulka="events.dvudulka"
            @event-clicked="scrollToEvent"
          />
        </v-col>
      </v-row>
    
      <v-card-text class="text-h6 text-justify">
        {{ info.description }}
      </v-card-text>
    </div>

    <div
      class="my-5"
      id="events"
    >
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
          class="bg-transparent"
          hide-actions
          elevation="0"
          :id="events.zh.id"
        >
          <v-expansion-panel-title class="ma-0 pa-0">
            <event-card
              :event="events.zh"
              :index="0"
            />
          </v-expansion-panel-title>
          <v-expansion-panel-text class="text-body-1 text-justify">
            {{ events.zh.longDescription }}
          </v-expansion-panel-text>
        </v-expansion-panel>
        <v-expansion-panel
          class="bg-transparent"
          hide-actions
          elevation="0"
          :id="events.rus.id"
        >
          <v-expansion-panel-title class="ma-0 pa-0">
            <event-card
              :event="events.rus"
              :index="1"
            />
          </v-expansion-panel-title>
          <v-expansion-panel-text class="text-body-1 text-justify">
            {{ events.rus.longDescription }}
          </v-expansion-panel-text>
        </v-expansion-panel>
        <v-expansion-panel
          class="bg-transparent"
          hide-actions
          elevation="0"
          :id="events.edc.id"
        >
          <v-expansion-panel-title class="ma-0 pa-0">
            <event-card
              :event="events.edc"
              :index="2"
            />
          </v-expansion-panel-title>
          <v-expansion-panel-text class="text-body-1 text-justify">
            {{ events.edc.longDescription }}
          </v-expansion-panel-text>
        </v-expansion-panel>
        <v-expansion-panel
          class="bg-transparent"
          hide-actions
          elevation="0"
          :id="events.dvudulka.id"
        >
          <v-expansion-panel-title class="ma-0 pa-0">
            <event-card
              :event="events.dvudulka"
              :index="3"
            />
          </v-expansion-panel-title>
          <v-expansion-panel-text class="text-body-1 text-justify">
            {{ events.dvudulka.longDescription }}
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
  </v-container>
</template>

<script setup lang="ts">
import { useDisplay } from 'vuetify';
import type { AboutModel, AllEventsModel } from '@/components/pages/home/model/all_data';
import CustomTitle from '@/components/pages/home/ui/common/CustomTitle.vue';
import InteractiveLogos from '@/components/pages/home/ui/about-organization/ui/logos/InteractiveLogos.vue';
import EventCard from '@/components/pages/home/ui/events/ui/event-card/EventCard.vue';

defineProps<{
  info: AboutModel;
  events: AllEventsModel;
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
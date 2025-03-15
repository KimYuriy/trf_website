<template>
  <v-row>
    <v-col
      class="ma-0 pa-0 d-flex align-end"
      cols="3"
    >
      <v-tooltip
        location="top"
        :text="edc.shortDescription"
      >
        <template #activator="{ props }">
          <v-img
            v-bind="props"
            cover
            aspect-ratio="1"
            :src="edc.logo"
            @click="emit('eventClicked', edc.id)"
          />
        </template>
      </v-tooltip>
    </v-col>
    <v-col
      class="ma-0 pa-0 d-flex flex-column align-center justify-center fill-height"
      cols="5"
    >
      <v-col
        class="ma-0 pa-0 fill-height"
        cols="7"
      >
        <v-tooltip
          location="end"
          :text="dvudulka.shortDescription"
        >
          <template #activator="{ props }">
            <v-img
              v-bind="props"
              cover
              aspect-ratio="1"
              :src="dvudulka.logo"
              @click="emit('eventClicked', dvudulka.id)"
            />
          </template>
        </v-tooltip>
      </v-col>
      <v-col
        class="ma-0 pa-0 fill-height"
        cols="12"
      >
        <v-tooltip
          location="bottom"
          :text="zh.shortDescription"
        >
          <template #activator="{ props }">
            <v-img
              v-bind="props"
              cover
              aspect-ratio="1"
              :src="zh.logo"
              @click="emit('eventClicked', zh.id)"
            />
          </template>
        </v-tooltip>
      </v-col>
    </v-col>
    <v-col
      class=" ma-0 pa-0 d-flex align-end"
      cols="3"
    >
      <v-tooltip
        location="top"
        :text="rus.shortDescription"
      >
        <template #activator="{ props }">
          <v-img
            v-bind="props"
            cover
            aspect-ratio="1"
            :src="rus.logo"
            @click="emit('eventClicked', rus.id)"
          />
        </template>
      </v-tooltip>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import type { EventModel } from '@/components/pages/home/model/all_data';

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
</script>
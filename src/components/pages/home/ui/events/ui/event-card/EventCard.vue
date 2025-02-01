<template>
  <v-dialog max-width="800">
    <template #activator="{ props: activatorProps }">
      <v-card
        v-bind="activatorProps"
        class="d-flex justify-space-between my-5"
        :class="index % 2 === 0 ? '' : 'flex-row-reverse'"
        variant="text"
      >
        <v-avatar
          :class="index % 2 === 0 ? 'mr-5' : 'ml-5'"
          rounded="0"
          size="250"
        >
          <v-img
            height="250"
            alt="Логотип мероприятия"
            :gradient="`to ${index % 2 == 0 ? 'right' : 'left'}, rgba(0,0,0,.0), rgba(48,48,48,1)`"
            :src="event.logo"
          />
        </v-avatar>
        <div>
          <v-card-title class="text-h4">
            {{ event.name }}
          </v-card-title>
          <v-card-text class="text-h6 text-justify">
            {{ event.shortDescription }}
          </v-card-text>
        </div>
      </v-card>
    </template>

    <template #default="{ isActive }">
      <v-card>
        <v-card-title  class="text-h4">
          {{ event.name }}
        </v-card-title>
        <v-row
          class="my-3"
          justify="center"
        >
          <v-avatar
            size="400"
            rounded="0"
          >
            <v-img
              cover
              alt="Логотип мероприятия"
              :src="event.logo"
            />
          </v-avatar>

        </v-row>
        <v-card-text class="text-body-1 text-justify">
          {{ event.longDescription }}
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            text="Закрыть"
            variant="text"
            @click="isActive.value = false"
          />
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<script setup lang="ts">
import type { DataLong } from '@/components/pages/home/model/all_data';

defineProps<{
  event: DataLong;
  index: number;
}>();
</script>
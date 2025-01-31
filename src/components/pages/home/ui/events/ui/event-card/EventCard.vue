<template>
  <v-card
    class="d-flex justify-space-between my-5"
    :class="index % 2 == 0  ? '' : 'flex-row-reverse'"
    variant="text"
  >
    <v-avatar
      :class="index % 2 == 0  ? 'mr-5' : 'ml-5'"
      rounded="0"
      size="250"
    >
      <v-img
        height="250"
        alt="Логотип мероприятия"
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
  
<script setup lang="ts">
import type { DataLong } from '@/components/pages/home/model/all_data';

defineProps<{
  event: DataLong;
  index: number
}>();
</script>
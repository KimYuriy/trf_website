<template>
  <v-img
    class="logo"
    aspect-ratio="1"
    :src="event?.logo.url"
    @click="emit('eventClicked', event!.id)"
  />
</template>

<script setup lang="ts">
import type { EventModel } from '@/components/pages/home/model/all_data';

defineProps<{
  event: EventModel | undefined;
}>();

const emit = defineEmits<{
  eventClicked: [id: number];
}>();
</script>

<style scoped>
.logo {
  transform: scale(0.9);
  transition: transform 0.3s ease;
}

.logo:hover {
  cursor: pointer;
  transform: scale(1);
  animation-duration: 2s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}
</style>
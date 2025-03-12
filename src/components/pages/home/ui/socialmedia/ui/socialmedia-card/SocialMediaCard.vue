<template>
  <v-card
    class="my-5 d-flex"
    :class="smAndUp ? '' : 'flex-column align-center'"
    variant="text"
    rounded="0"
    target="blank"
    :href="media.url"
  >
    <v-avatar
      class="my-auto"
      rounded="0"
      :size="64"
      :image="media.logo"
    />
    <div>
      <v-card-title
        :class="!smAndUp ? 'text-center' : ''"
      >
        {{ media.name }}
      </v-card-title>
      <v-card-text class=" text-justify">
        {{ media.description }}
      </v-card-text>
    </div>
  </v-card>
</template>

<script setup lang="ts">
import { useDisplay } from 'vuetify';
import type { DataModel } from '@/components/pages/home/model/all_data';

defineProps<{
  media: DataModel
}>();

const { smAndUp } = useDisplay();
</script>
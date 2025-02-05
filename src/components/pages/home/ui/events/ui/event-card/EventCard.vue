<template>
 <v-card
    class="d-flex justify-space-between my-5"
    :class="[
      smAndUp? `${index % 2 === 0 ? '' : 'flex-row-reverse'}` : 'flex-column align-center',
    ]"
    variant="text"
  >
    <v-avatar
      :class="smAndUp && index % 2 === 0 ? 'mr-5' : 'ml-5'"
      rounded="0"
      size="250"
    >
      <v-img
        height="250"
        alt="Логотип мероприятия"
        :gradient="smAndUp? `to ${index % 2 == 0 ? 'right' : 'left'}, rgba(0,0,0,.0), rgba(48,48,48,1)`: ''"
        :src="event.logo"
      />
    </v-avatar>
    <div>
      <v-card-title
        class="text-h4"
        :class="!smAndUp? 'text-center' : ''"
      >
        {{ event.name }}
      </v-card-title>
      <v-card-text class="text-h6 text-justify">
        {{ event.shortDescription }}
      </v-card-text>
    </div>
  </v-card>
</template>

<script setup lang="ts">
import type { LongDataModel } from '@/components/pages/home/model/all_data';
import { useDisplay } from 'vuetify'

defineProps<{
  event: LongDataModel;
  index: number;
}>();

const { smAndUp } = useDisplay()
</script>
<template>
  <div>
    <v-card
      class="d-flex justify-space-between my-5"
      :class="index % 2 === 0 ? '' : 'flex-row-reverse'"
      variant="text"
      @click="dialog = true"
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

    <v-dialog
      v-model="dialog"
      max-width="800"
    >
      <v-card>
        <v-card-title class="text-h4">
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
            @click="dialog = false"
          />
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { LongDataModel } from '@/components/pages/home/model/all_data';

defineProps<{
  event: LongDataModel;
  index: number;
}>();

const dialog = ref<boolean>(false);
</script>
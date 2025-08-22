<template>
  <v-container
    class="ma-0 mt-10 pa-0"
    fluid
  >
    <custom-title text="Партнёры" />
    <v-slide-group
      v-if="smAndUp"
      class="mt-5"
      center-active
      show-arrows
    >
      <v-slide-group-item v-for="partner in partners">
        <partner-card
          class="mx-4"
          :partner="partner"
        />
      </v-slide-group-item>
    </v-slide-group>

    <v-carousel
      v-else
      hide-delimiters
      cycle
    >
      <v-carousel-item v-for="partner in partners">
        <div class="d-flex align-center justify-center">
          <partner-card :partner="partner" />
        </div>
      </v-carousel-item>
    </v-carousel>
  </v-container>
</template>

<script setup lang="ts">
import type { DataModel } from '@/components/pages/home/model/all_data';
import PartnerCard from '@/components/pages/home/ui/partners/ui/partner-card/PartnerCard.vue';
import CustomTitle from '@/components/pages/home/ui/common/CustomTitle.vue';
import { useDisplay } from 'vuetify';

defineProps<{
  partners: DataModel[];
}>();

const { smAndUp } = useDisplay();
</script>
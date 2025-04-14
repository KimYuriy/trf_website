<template>
  <v-container
    class="ma-0 mt-10 pa-0"
    fluid
  >
    <custom-title text="Партнёры" />
    <v-slide-group
      class="mt-5"
      center-active
      show-arrows
    >
      <v-slide-group-item v-for="(partner, index) in partners">
        <partner-card
          class="mx-4"
          :partner="partner"
          :index="index"
        />
      </v-slide-group-item>
    </v-slide-group>
  </v-container>
</template>

<script setup lang="ts">
import type { DataModel } from '@/components/pages/home/model/all_data';
import PartnerCard from '@/components/pages/home/ui/partners/ui/partner-card/PartnerCard.vue';
import CustomTitle from '@/components/pages/home/ui/common/CustomTitle.vue';

defineProps<{
  partners: DataModel[];
}>();
</script>
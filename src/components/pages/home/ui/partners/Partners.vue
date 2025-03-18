<template>
  <v-container
    class="ma-0 mt-10 pa-0"
    fluid
  >
    <custom-title text="Партнёры" />
    <v-row class="mt-5 ga-10 align-center justify-center">
      <partner-card
        v-for="partner in partners"
        :partner="partner"
      />
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import type { DataModel } from '@/components/pages/home/model/all_data';
import PartnerCard from '@/components/pages/home/ui/partners/ui/partner-card/PartnerCard.vue';
import CustomTitle from '@/components/pages/home/ui/common/CustomTitle.vue';

defineProps<{
  partners: DataModel[]
}>();
</script>
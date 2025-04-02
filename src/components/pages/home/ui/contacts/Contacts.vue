<template>
  <v-container
    class="ma-0 pa-0 mt-10"
    fluid
  >
    <custom-title text="Контакты" />
    <v-col v-for="contact in contacts">
      <contact-card :contact="contact" />
    </v-col>
  </v-container>
</template>

<script setup lang="ts">
import type { DataModel } from '@/components/pages/home/model/all_data';
import CustomTitle from '@/components/pages/home/ui/common/CustomTitle.vue';
import ContactCard from '@/components/pages/home/ui/contacts/ui/contact-card/ContactCard.vue';

defineProps<{
  contacts: DataModel[];
}>();
</script>
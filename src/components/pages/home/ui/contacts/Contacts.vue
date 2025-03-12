<template>
  <v-container class="my-5">
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
  contacts: DataModel[]
}>();
</script>
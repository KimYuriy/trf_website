<template>
  <v-card
    class="d-flex"
    :class="smAndUp? '' : 'flex-column align-center'"
    variant="text"
  >
    <v-avatar
      :size="192"
      :image="contact.logo.url"
    />
    <div>
      <v-card-title
        class="text-h4"
        :class="!smAndUp? 'text-center' : ''"
      >
        <rich-text :text="contact.name" />
      </v-card-title>
      <v-card-text class="text-h6 text-justify">
        <rich-text :text="contact.description" />
      </v-card-text>
    </div>
  </v-card>
</template>

<script setup lang="ts">
import { useDisplay } from 'vuetify';
import type { DataModel } from '@/components/pages/home/model/all_data';
import RichText from '@/components/pages/home/ui/common/RichText.vue';

defineProps<{
  contact: DataModel
}>();

const { smAndUp } = useDisplay();
</script>
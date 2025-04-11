<template>
  <v-card
    class="d-flex"
    :class="{ 'flex-column align-center': !smAndUp }"
    variant="text"
  >
    <a
      target="_blank"
      :href="contact.url"
    >
      <v-avatar
        :size="128"
        :image="contact.logo.url"
      />
    </a>
    <div :class="{ 'ml-12': smAndUp }">
      <p
        class="text-h4"
        :class="{ 'text-center mt-2': !smAndUp }"
      >
        <rich-text :text="contact.name" />
      </p>
      <p
        class="text-h6 text-justify"
        :class="{ 'mt-3': !smAndUp }"
      >
        <rich-text :text="contact.description" />
      </p>
    </div>
  </v-card>
</template>

<script setup lang="ts">
import { useDisplay } from 'vuetify';
import type { DataModel } from '@/components/pages/home/model/all_data';
import RichText from '@/components/pages/home/ui/common/RichText.vue';

defineProps<{
  contact: DataModel;
}>();

const { smAndUp } = useDisplay();
</script>
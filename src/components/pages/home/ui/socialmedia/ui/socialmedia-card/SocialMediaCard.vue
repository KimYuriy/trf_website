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
      rounded="0"
      :size="64"
      :image="media.logo.url"
    />
    <div :class="smAndUp? 'ml-5' : 'mt-5'">
      <p
        class="text-h5"
        :class="{ 'text-center': !smAndUp }"
      >
        <rich-text :text="media.name" />
      </p>
      <p class="text-body-1 text-justify">
        <rich-text :text="media.description" />
      </p>
    </div>
  </v-card>
</template>

<script setup lang="ts">
import { useDisplay } from 'vuetify';
import type { DataModel } from '@/components/pages/home/model/all_data';
import RichText from '@/components/pages/home/ui/common/RichText.vue';

defineProps<{
  media: DataModel;
}>();

const { smAndUp } = useDisplay();
</script>
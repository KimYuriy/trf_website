<template>
  <v-container>
    <custom-title
      text-style="my-5"
      :class="smAndUp? 'text-h2' : 'text-h4'"
      :text="info.name"
    />
    <!--TODO: Отцентрировать -->
    <v-row v-if="smAndUp" align="center" justify="center" class="my-5">
      <v-col cols="10">
        <interactive-logos
          :logo_dv="info.logoDV"
          :logo_edc="info.logoEDC"
          :logo_rus="info.logoRUS"
          :logo_zh="info.logoZH"
        />
      </v-col>
    </v-row>

    <v-card-text class="text-h6 text-justify">
      {{ info.description }}
    </v-card-text>
  </v-container>
</template>

<script setup lang="ts">
import { useDisplay } from 'vuetify';
import type { AboutModel } from '@/components/pages/home/model/all_data';
import CustomTitle from '@/components/pages/home/ui/common/CustomTitle.vue';
import InteractiveLogos from '@/components/pages/home/ui/about-organization/ui/logos/InteractiveLogos.vue';

defineProps<{
  info: AboutModel
}>();

const { smAndUp } = useDisplay();
</script>
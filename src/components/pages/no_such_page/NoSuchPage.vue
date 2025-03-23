<template>
  <v-container
    class="fill-height"
    fluid
  >
    <v-row
      class="text-center text-h5"
      align="center"
      justify="center"
    >
      <v-col cols="12">
        <rich-text :text="text" />
        <router-link
          class="mt-5"
          to="/"
          v-text="'Вернуться на главную'"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import RichText from '@/components/pages/home/ui/common/RichText.vue';

const text = ref<string>('Страница, которую Вы пытаетесь открыть, не существует');
</script>

<style scoped lang="scss">
@import "@/components/styles/index";
</style>
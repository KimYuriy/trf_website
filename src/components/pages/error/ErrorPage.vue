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
      </v-col>
    </v-row>
  </v-container>
</template>
  
<script setup lang="ts">
import { ref } from 'vue';
import RichText from '@/components/pages/home/ui/common/RichText.vue';
  
const text = ref<string>('Ошибка загрузки страницы. Пожалуйста, попробуйте зайти позже');
</script>
  
<style scoped lang="scss">
@import "@/components/styles/index";
</style>
<template>
  <v-container
    class="fill-height"
    fluid
  >
    <v-row
      class="text-center text-h2 text-uppercase"
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
import { onBeforeMount, ref } from 'vue';
import RichText from '@/components/pages/home/ui/common/RichText.vue';

const text = ref<string>('В разработке');

onBeforeMount(() => {
  //TODO: Сделать запрос на получение текста для надписи
});
</script>

<style scoped>
.fill-height {
  height: 100vh;
}
</style>
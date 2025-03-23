<template>
  <v-container
    class="fill-height"
    fluid
  >
    <v-row
      class="text-center text-h2"
      align="center"
      justify="center"
    >
      <v-col cols="12">
        <rich-text :text="shownText" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { onBeforeMount, ref } from 'vue';
import { InProgressApi } from '@/components/pages/in-progress/network/in_progress_api';
import RichText from '@/components/pages/home/ui/common/RichText.vue';
import router from '@/router';

const shownText = ref<string>('В разработке');

//TODO: Заменить на реальный эндпоинт
const inProgressApi = new InProgressApi('');

onBeforeMount(async () => {
  inProgressApi.getText()
    .then((text) => shownText.value = text)
    .catch(() => {
      sessionStorage.setItem('navigation.error', 'true');
      router.replace('/error');
    })
});
</script>

<style scoped>
.fill-height {
  height: 100vh;
}
</style>
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
        <v-progress-circular
          color="white"
          indeterminate
          size="70"
          width="6"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import router from '@/router';
import { onBeforeMount } from 'vue';
import { LoadingApi } from './network/loading_api';

//TODO: заменить эндпоинт на реальный
const loadingApi = new LoadingApi('/endpoint');

onBeforeMount(async () => {
  //TODO: раскомментировать
  // loadingApi.getStatus()
  //   .then((isWIP) => router.replace(isWIP ? '/in-progress' : '/home'))
  //   .catch(() => router.replace('/error'));

  //TODO: удалить
  router.replace('/home');
});
</script>

<style scoped>
.fill-height {
  height: 100vh;
}
</style>
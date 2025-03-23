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
import { onBeforeMount } from 'vue';
import router from '@/router';
import { LoadingApi } from '@/components/pages/loading/network/loading_api';

//TODO: заменить эндпоинт на реальный
const loadingApi = new LoadingApi('/endpoint');

onBeforeMount(async () => {
  //TODO: раскомментировать
  // loadingApi.getStatus()
  //   .then((isWIP) => {
  //     sessionStorage.setItem(`navigation.${isWIP ? 'in-progress' : 'home'}`, 'true');
  //     router.replace(isWIP ? '/in-progress' : '/home');
  //   })
  //   .catch(() => {
  //     sessionStorage.setItem('navigation.error', 'true');
  //     router.replace('/error');
  //   });

  //TODO: удалить
  sessionStorage.setItem('navigation.home', 'true');
  router.replace('/home');
});
</script>

<style scoped>
.fill-height {
  height: 100vh;
}
</style>
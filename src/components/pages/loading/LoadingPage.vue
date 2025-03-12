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

onBeforeMount(() => {
  //TODO: сделать запрос на статус сайта "В разработке" или нет
  // Отправляем запрос на получение статуса, получаем ответ
  // Если статус - true, то выполняем router.replace('/in-progress')
  // Если статус - false, то выполняем router.replace('/home')
  router.replace('/home');
});
</script>

<style scoped>
.fill-height {
  height: 100vh;
}
</style>
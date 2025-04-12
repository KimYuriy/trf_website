<template>
  <v-container
    class="fill-height"
    fluid
  >
    <v-row
      class="text-center"
      align="center"
      justify="center"
    >
      <v-col cols="12">
        <v-progress-circular
          v-if="systemText === undefined"
          indeterminate
          color="white"
          size="70"
          width="6"
        />
        <rich-text
          v-else
          class="text-h2"
          :text="systemText"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { onBeforeMount, ref } from 'vue';
import router from '@/router';
import { LoadingApi } from '@/components/pages/start/network/start_api';
import RichText from '@/components/pages/home/ui/common/RichText.vue';

const loadingApi = new LoadingApi('/in-progress');

const systemText = ref<string | undefined>(undefined);

onBeforeMount(async () => {
  loadingApi.getStatus()
    .then((data) => {
      try {
        if (data.isAvailable) {
          sessionStorage.setItem('navigation.home', 'true');
          router.replace('/home');
        } else {
          try {
            systemText.value = data.description;
          } catch {
            systemText.value = 'В разработке';
          }
        }
      } catch (_) {
        systemText.value = 'Ошибка загрузки данных. Пожалуйста, попробуйте позднее';
      }
    })
    .catch(() => systemText.value = 'Ошибка загрузки данных. Пожалуйста, попробуйте позднее');
});
</script>

<style scoped lang="scss">
@import "@/components/styles/index";
</style>
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
          v-if="wipText === undefined"
          indeterminate
          color="white"
          size="70"
          width="6"
        />
        <rich-text
          v-else
          class="text-h2"
          :text="wipText"
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

const wipText = ref<string | undefined>(undefined);

onBeforeMount(async () => {
  loadingApi.getStatus()
    .then((data) => {
      if (data.isAvailable) {
        sessionStorage.setItem('navigation.home', 'true');
        router.replace('/home');
      } else {
        try {
          wipText.value = data.description
        } catch {
          wipText.value = 'В разработке'
        }
      }
    })
    .catch(() => {
      wipText.value = 'Ошибка загрузки данных. Пожалуйста, попробуйте позднее';
    });
});
</script>

<style scoped lang="scss">
@import "@/components/styles/index";
</style>
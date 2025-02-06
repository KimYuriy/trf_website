<template>
  <v-footer class="bg-red">
    <v-row
      justify="center"
      no-gutters
    >
      <v-btn
        v-if="smAndUp"
        v-for="title in NavLinks"
        class="mx-1 text-black"
        variant="text"
        @click="emit('nav-clicked', title.id)"
      >
        <strong>{{ title.text }}</strong>
      </v-btn>
      <v-col
        class="text-center text-black text-uppercase my-4"
        cols="12"
      >
        {{ name }} — {{ new Date().getFullYear() }}
      </v-col>
    </v-row>
  </v-footer>
</template>

<script setup lang="ts">
import { useDisplay } from 'vuetify';
import { NavLinks } from '@/components/pages/home/model/nav_links';

defineProps<{
  name: string
}>();

const { smAndUp } = useDisplay();

const emit = defineEmits(['nav-clicked']);
</script>
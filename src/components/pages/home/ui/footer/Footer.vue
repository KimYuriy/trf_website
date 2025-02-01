<template>
  <v-footer class="bg-red">
    <v-row
      justify="center"
      no-gutters
    >
      <v-btn
        v-for="title in titles"
        class="mx-1"
        color="black"
        variant="text"
        @click="emit('nav-clicked', title.id)"
      >
        <strong>{{ title.text }}</strong>
      </v-btn>
      <v-col
        class="text-center text-black text-uppercase mt-4 mb-4"
        cols="12"
      >
        {{ name }} — {{ new Date().getFullYear() }}
      </v-col>
    </v-row>
  </v-footer>
</template>

<script setup lang="ts">
defineProps<{
  name: string
}>();

const titles = [
  { id: "about", text: 'О нас' },
  { id: "events", text: 'Мероприятия' },
  { id: "gallery", text: 'Галерея' },
  { id: "partners", text: 'Партнёры' },
  { id: "social", text: 'Соц.сети' },
  { id: "contacts", text: 'Контакты' }
];

const emit = defineEmits(['nav-clicked']);
</script>
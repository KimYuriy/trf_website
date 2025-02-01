<template>
  <v-app-bar
    color="red"
    app
    flat
  >
    <v-row justify="center">
      <v-btn
        v-for="link in titles"
        class="mx-1 text-black"
        :key="link.id"
        @click="emit('nav-clicked', link.id)"
      >
        <strong>{{ link.text }}</strong>
      </v-btn>
    </v-row>
  </v-app-bar>
</template>

<script setup lang="ts">
defineProps<{
  title: string
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
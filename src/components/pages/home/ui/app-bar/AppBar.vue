<template>
  <div>
    <v-app-bar
      color="red"
      app
      flat
    >
      <v-row
        v-if="smAndUp"
        justify="center"
      >
        <v-btn
          v-for="link in titles"
          class="mx-1 text-black"
          :key="link.id"
          @click="emit('nav-clicked', link.id)"
        >
          <strong>{{ link.text }}</strong>
        </v-btn>
      </v-row>
      <v-app-bar-nav-icon
        v-if="!smAndUp"
        color="black"
        @click.stop="drawer = !drawer"
      />
      <v-app-bar-title
        v-if="!smAndUp"
        class="text-black font-weight-bold"
      >
        {{ title }}
      </v-app-bar-title>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      temporary
    >
      <v-list>
        <v-list-item
          v-for="link in titles"
          :title="link.text"
          @click="scrollToBlock(link.id)"
        />
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useDisplay } from 'vuetify';

defineProps<{
  title: string
}>();

const { smAndUp } = useDisplay();

const titles = [
  { id: "about", text: 'О нас' },
  { id: "events", text: 'Мероприятия' },
  { id: "gallery", text: 'Галерея' },
  { id: "partners", text: 'Партнёры' },
  { id: "social", text: 'Соц.сети' },
  { id: "contacts", text: 'Контакты' }
];

const emit = defineEmits(['nav-clicked']);

const drawer = ref<boolean>(false);

const scrollToBlock = (id: string) => {
  drawer.value = false;
  emit('nav-clicked', id);
}
</script>
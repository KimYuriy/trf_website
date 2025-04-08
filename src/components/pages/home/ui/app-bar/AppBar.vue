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
          v-for="link in NavLinks"
          class="mx-1 text-black"
          @click="emit('navClicked', link.id)"
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
        <rich-text :text="title"/>
      </v-app-bar-title>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      temporary
      :style="{
        backgroundColor: '#303030'
      }"
    >
      <v-list>
        <v-list-item
          v-for="link in NavLinks"
          class="custom-font text-uppercase text-white"
          @click="scrollToBlock(link.id)"
        >
          {{ link.text }}
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useDisplay } from 'vuetify';
import { NavLinks } from '@/components/pages/home/model/nav_links';
import RichText from '@/components/pages/home/ui/common/RichText.vue';

withDefaults(
  defineProps<{
    title?: string;
  }>(),
  {
    title: 'Тактикул.РФ'
  }
);

const { smAndUp } = useDisplay();

const emit = defineEmits<{
  navClicked: [id: string];
}>();

const drawer = ref<boolean>(false);

const scrollToBlock = (id: string) => {
  drawer.value = false;
  emit('navClicked', id);
}
</script>

<style scoped lang="scss">
@import "@/components/styles/index";
</style>
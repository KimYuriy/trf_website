<template>
  <div>
    <v-app-bar
      class="app-bar-transition"
      app
      flat
      :color="isScrolled ? 'background' : 'transparent'"
      :elevation="isScrolled ? 4 : 0"
    >
      <v-row
        v-if="smAndUp"
        justify="center"
      >
        <v-btn
          v-for="link in NavLinks"
          class="mx-1 text-white"
          @click="emit('navClicked', link.id)"
          variant="text"
        >
          <strong>{{ link.text }}</strong>
        </v-btn>
      </v-row>
      <v-app-bar-nav-icon
        v-if="!smAndUp"
        color="white"
        @click.stop="drawer = !drawer"
      />
      <v-app-bar-title
        v-if="!smAndUp"
        class="font-weight-bold text-white"
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
import { ref, onMounted, onBeforeUnmount } from 'vue';
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
const isScrolled = ref<boolean>(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 10;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});

const scrollToBlock = (id: string) => {
  drawer.value = false;
  emit('navClicked', id);
};
</script>

<style scoped lang="scss">
@import "@/components/styles/index";

.app-bar-transition {
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  backdrop-filter: blur(5px);
  
  &.v-toolbar--transparent {
    background-color: transparent !important;
  }
}

.v-btn {
  &:before {
    background-color: transparent !important;
  }
}
</style>
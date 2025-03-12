<template>
  <v-container fluid class="ma-0 pa-0">
    <app-bar
      :title="data!.about.name"
      @nav-clicked="scrollToSection"
    />
    <about-organization
      id="about"
      :info="data!.about"
    />
    <events 
      v-if="data!.events.length > 0"
      id="events"
      :events="data!.events"
    />
    <partners
      v-if="data!.partners.length > 0"
      id="partners"
      :partners="data!.partners"
    />
    <gallery
      v-if="data!.gallery.length > 0"
      id="gallery"
      :albums="data!.gallery"
    />
    <contacts
    v-if="data!.contacts.length > 0"
    id="contacts"
    :contacts="data!.contacts"
    />
    <social-media
      v-if="data!.socialmedias.length > 0"
      id="social"
      :socials="data!.socialmedias"
    />
    <custom-footer
      :name="data!.about.name"
      @nav-clicked="scrollToSection"
    />
  </v-container>
</template>

<script setup lang="ts">
import { onBeforeMount, ref } from 'vue';
import { AllDataModel, type IAllData } from './model/all_data';
import testJson from '@/test_data/test_incoming_json.json';
import AppBar from '@/components/pages/home/ui/app-bar/AppBar.vue';
import AboutOrganization from '@/components/pages/home/ui/about-organization/AboutOrganization.vue';
import Events from '@/components/pages/home/ui/events/Events.vue';
import Gallery from '@/components/pages/home/ui/gallery/Gallery.vue';
import Partners from '@/components/pages/home/ui/partners/Partners.vue';
import SocialMedia from '@/components/pages/home/ui/socialmedia/SocialMedia.vue';
import Contacts from '@/components/pages/home/ui/contacts/Contacts.vue';
import CustomFooter from '@/components/pages/home/ui/footer/Footer.vue';

const data = ref<AllDataModel | null>(null);

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - 100;
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }
};

onBeforeMount(() => {
  //TODO: сделать получение JSON с сервера
  data.value = new AllDataModel(testJson as IAllData);
});
</script>
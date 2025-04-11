<template>
  <div>
    <app-bar
      :title="data.about.name"
      @nav-clicked="scrollToSection"
    />
    <v-container
      :class="contentWidth"
      fluid
    >
      <v-row
        align="center"
        justify="center"
      >
        <v-col cols="12">
          <about-organization-n-events
            :info="data.about"
            :events="data.events"
          />
          <partners
            v-if="data.partners.length > 0"
            id="partners"
            :partners="data.partners"
          />
          <gallery
            v-if="data.gallery.length > 0"
            id="gallery"
            :albums="data.gallery"
          />
          <contacts
            v-if="data.contacts.length > 0"
            id="contacts"
            :contacts="data.contacts"
          />
          <social-media
            v-if="data.socialmedias.length > 0"
            id="social"
            :socials="data.socialmedias"
          />
        </v-col>
      </v-row>
    </v-container>
    <custom-footer :title="data.about.name"/>
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeMount, ref } from 'vue';
import { useDisplay } from 'vuetify';
import { HomeApi } from '@/components/pages/home/network/home_api';
import { AllDataModel } from '@/components/pages/home/model/all_data';
import AppBar from '@/components/pages/home/ui/app-bar/AppBar.vue';
import Gallery from '@/components/pages/home/ui/gallery/Gallery.vue';
import Partners from '@/components/pages/home/ui/partners/Partners.vue';
import SocialMedia from '@/components/pages/home/ui/socialmedia/SocialMedia.vue';
import Contacts from '@/components/pages/home/ui/contacts/Contacts.vue';
import CustomFooter from '@/components/pages/home/ui/footer/Footer.vue';
import AboutOrganizationNEvents from '@/components/pages/home/ui/about-org-n-events/AboutOrganizationNEvents.vue';

const { smAndUp, xlAndDown } = useDisplay();

const data = ref<AllDataModel>(AllDataModel.default());

const homeApi = new HomeApi('/summary');

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

onBeforeMount(async () => {
  // homeApi.getContent()
  //   .then((response) => {
  //     data.value = new AllDataModel(response); 
  //   })
  //   .catch(() => {
  //     data.value = AllDataModel.default();
  //   });
});

const contentWidth = computed<string>(() => {
  if (!xlAndDown.value) {
    return 'w-33';
  }
  if (smAndUp.value) {
    return 'w-75';
  }
  return 'w-100';
});
</script>
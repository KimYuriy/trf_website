import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { createVuetify } from 'vuetify';
import { customTheme } from '@/theme/custom_theme';
import '@/theme/fonts/bahnschrift.css';

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: "customTheme",
    themes: {
      customTheme
    }
  },
  icons: {
    defaultSet: 'mdi',
  },
})

createApp(App)
  .use(router)
  .use(vuetify)
  .mount('#app');
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import pinia from './stores';
import { Quasar } from 'quasar';

const app = createApp(App);
app.use(router);
app.use(pinia);
app.use(Quasar);
app.mount('#app');

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from '@/router';
import funcPlugins from './plugins/func';
import objPlugins from './plugins/obj';

const app = createApp(App);
const pinia = createPinia();

app.use(router);
app.use(pinia);
app.use(funcPlugins);
app.use(objPlugins, { name: 'ncg' });
app.mount('#app');

import 'bootstrap/dist/js/bootstrap.js';

// console.log(`${import.meta.env.MODE}`);
// console.log(`${import.meta.env.DEV}`);
// console.log(`${import.meta.env.PROD}`);
// console.log(`${import.meta.env.BASE_URL}`);
// console.log(`${import.meta.env.VITE_APP_API_URL}`);

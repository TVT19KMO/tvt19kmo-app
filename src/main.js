import { createApp } from 'vue';

import BaseInput from '@/components/BaseInput.vue';
import App from './App.vue';
import './index.css';

createApp(App)
  .component('BaseInput', BaseInput)
  .mount('#app');

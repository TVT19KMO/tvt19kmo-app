import { createApp } from 'vue';

import BaseInput from '@/components/BaseInput.vue';
import BaseButton from '@/components/BaseButton.vue';
import App from './App.vue';
import './index.css';

createApp(App)
  .component('BaseButton', BaseButton)
  .component('BaseInput', BaseInput)
  .mount('#app');

import { createApp } from 'vue';
import App from './App.vue';
import './index.css';

import BaseButton from './components/BaseButton.vue';

createApp(App).component('BaseButton', BaseButton).mount('#app');

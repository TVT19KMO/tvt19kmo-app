import { createApp } from 'vue';

import './index.css';

// Global components.
import BaseTable from '@/components/BaseTable.vue';
import BaseForm from '@/components/BaseForm.vue';
import BaseButton from '@/components/BaseButton.vue';
import BaseInput from '@/components/BaseInput.vue';

import App from './App.vue';

createApp(App)
  .component('BaseForm', BaseForm)
  .component('BaseButton', BaseButton)
  .component('BaseInput', BaseInput)
  .component('BaseTable', BaseTable)
  .mount('#app');

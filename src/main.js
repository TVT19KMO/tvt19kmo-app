import { createApp } from 'vue';

import BaseInput from '@/components/BaseInput.vue';
import BaseButton from '@/components/BaseButton.vue';
import BaseForm from '@/components/BaseForm.vue';
import Heading from '@/components/Heading.vue';
import BaseTable from '@/components/BaseTable.vue';

import App from './App.vue';
import './index.css';

createApp(App)
  .component('Heading', Heading)
  .component('BaseButton', BaseButton)
  .component('BaseInput', BaseInput)
  .component('BaseForm', BaseForm)
  .component('BaseTable', BaseTable)
  .mount('#app');

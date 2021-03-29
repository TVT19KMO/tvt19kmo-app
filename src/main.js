import { createApp } from 'vue';

import './index.css';

// Global components.
import Heading from '@/components/Heading.vue';
import BaseTable from '@/components/BaseTable.vue';
import BaseList from '@/components/BaseList.vue';
import BaseForm from '@/components/BaseForm.vue';
import BaseButton from '@/components/BaseButton.vue';
import BaseInput from '@/components/BaseInput.vue';

import App from './App.vue';

createApp(App)
  .component('Heading', Heading)
  .component('BaseForm', BaseForm)
  .component('BaseButton', BaseButton)
  .component('BaseInput', BaseInput)
  .component('BaseList', BaseList)
  .component('BaseTable', BaseTable)
  .mount('#app');

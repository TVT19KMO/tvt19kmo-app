import { createApp } from 'vue';

import BaseInput from '@/components/BaseInput.vue';
import BaseButton from '@/components/BaseButton.vue';
import BaseForm from '@/components/BaseForm.vue';
import BaseList from '@/components/BaseList.vue';
import BaseTable from '@/components/BaseTable.vue';
import Heading from '@/components/Heading.vue';

import store from '@/store';

import App from './App.vue';
import './index.css';

createApp(App)
  .use(store)
  .component('Heading', Heading)
  .component('BaseButton', BaseButton)
  .component('BaseInput', BaseInput)
  .component('BaseForm', BaseForm)
  .component('BaseTable', BaseTable)
  .component('BaseList', BaseList)
  .mount('#app');

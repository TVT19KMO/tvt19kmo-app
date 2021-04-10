import { createApp } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faWallet } from '@fortawesome/free-solid-svg-icons';

import '@stripe/stripe-js';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import BaseModal from '@/components/BaseModal.vue';
import BaseInput from '@/components/BaseInput.vue';
import BaseButton from '@/components/BaseButton.vue';
import BaseForm from '@/components/BaseForm.vue';
import BaseList from '@/components/BaseList.vue';
import BaseTable from '@/components/BaseTable.vue';
import Heading from '@/components/Heading.vue';

import store from '@/store';

library.add(faWallet);

import App from './App.vue';
import './index.css';

createApp(App)
  .use(store)
  .component('FontAwesomeIcon', FontAwesomeIcon)
  .component('Heading', Heading)
  .component('BaseButton', BaseButton)
  .component('BaseInput', BaseInput)
  .component('BaseForm', BaseForm)
  .component('BaseTable', BaseTable)
  .component('BaseList', BaseList)
  .component('BaseModal', BaseModal)
  .mount('#app');

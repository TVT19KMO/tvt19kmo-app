import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import { router } from './routes';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faWallet } from '@fortawesome/free-solid-svg-icons';

import '@stripe/stripe-js';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import ClipLoader from 'vue-spinner/src/ClipLoader.vue';

import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import Dropdown from 'primevue/dropdown';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Card from 'primevue/card';
import Button from 'primevue/button';
import Dialog from 'primevue/dialog';
import Toolbar from 'primevue/toolbar';
import Password from 'primevue/password';

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
import 'primeflex/primeflex.css';
import 'primevue/resources/themes/vela-green/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

createApp(App)
  .use(store)
  .use(router)
  .use(PrimeVue)
  .component('Toolbar', Toolbar)
  .component('Dialog', Dialog)
  .component('Button', Button)
  .component('FontAwesomeIcon', FontAwesomeIcon)
  .component('DataTable', DataTable)
  .component('InputText', InputText)
  .component('Textarea', Textarea)
  .component('Column', Column)
  .component('Heading', Heading)
  .component('BaseButton', BaseButton)
  .component('BaseInput', BaseInput)
  .component('BaseForm', BaseForm)
  .component('BaseTable', BaseTable)
  .component('BaseList', BaseList)
  .component('BaseModal', BaseModal)
  .component('Dropdown', Dropdown)
  .component('Password', Password)
  .component('Card', Card)
  .component('ClipLoader', ClipLoader)
  .mount('#app');

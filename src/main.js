import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import { router } from './routes';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faWallet } from '@fortawesome/free-solid-svg-icons';

import '@stripe/stripe-js';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import ClipLoader from 'vue-spinner/src/ClipLoader.vue';

import ToastService from 'primevue/toastservice';
import ConfirmationService from 'primevue/confirmationservice';

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
import DataView from 'primevue/dataview';
import Chip from 'primevue/chip';
import Tag from 'primevue/tag';
import Toast from 'primevue/toast';
import ConfirmDialog from 'primevue/confirmdialog';

import PageWrapper from '@/components/PageWrapper.vue';
import BaseModal from '@/components/BaseModal.vue';
import BaseInput from '@/components/BaseInput.vue';
import BaseButton from '@/components/BaseButton.vue';
import BaseForm from '@/components/BaseForm.vue';
import BaseList from '@/components/BaseList.vue';
import BaseTable from '@/components/BaseTable.vue';
import Heading from '@/components/Heading.vue';

import { store } from '@/store';

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
  .use(ToastService)
  .use(ConfirmationService)
  .component('PageWrapper', PageWrapper)
  .component('Toolbar', Toolbar)
  .component('Dialog', Dialog)
  .component('Button', Button)
  .component('Toast', Toast)
  .component('ConfirmDialog', ConfirmDialog)
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
  .component('DataView', DataView)
  .component('Chip', Chip)
  .component('Tag', Tag)
  .component('Card', Card)
  .component('ClipLoader', ClipLoader)
  .mount('#app');

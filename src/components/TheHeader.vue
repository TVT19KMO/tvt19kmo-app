<template>
  <Menubar class="fixed top-0 w-full z-50" :model="items">
    <template #start>
      <a class="font-semibold text-xl px-2 py-2 cursor-pointer" @click="$router.push('/')"
        >Child<span class="text-primary">watch</span></a
      >
    </template>
  </Menubar>

  <PurchaseModal v-model:visible="showModal" @hide="showModal = false" />
</template>

<script>
import Menubar from 'primevue/menubar';
import PurchaseModal from '@/components/PurchaseModal.vue';
import { mapActions, mapGetters } from 'vuex';
import { LOGOUT_USER } from '@/store/user/actions';
import { mapFields } from 'vuex-map-fields';

export default {
  name: 'TheHeader',

  emits: ['navigate'],

  components: { PurchaseModal, Menubar },

  data() {
    return {
      showModal: false,
    };
  },

  computed: {
    ...mapFields(['user.userData']),
    ...mapGetters(['isAuthenticated']),

    items({ isAuthenticated, userData }) {
      if (!isAuthenticated) return [];

      return [
        {
          label: 'Tasks',
          icon: 'pi pi-fw pi-tags',
          to: '/tasks',
        },
        {
          label: 'Children',
          icon: 'pi pi-fw pi-tags',
          to: '/children',
        },
        {
          label: 'Statistics',
          icon: 'pi pi-info-circle',
          to: '/statistics'
        },
        {
          label: `Coins: ${userData?.balance}`,
          icon: 'pi pi-fw pi-wallet',
          command: () => {
            this.showModal = true;
          },
          class: 'ml-auto',
        },
        {
          label: 'Logout',
          icon: 'pi pi-fw pi-logout',
          command: async () => {
            await this[LOGOUT_USER]();
            this.$router.push({ name: 'login' });
          },
        },
      ];
    },
  },

  methods: {
    ...mapActions([LOGOUT_USER]),
  },
};
</script>

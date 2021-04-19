<template>
  <Menubar :model="isAuthenticated ? items : []">
    <template #start>
      <a
        class="font-semibold text-xl px-2 py-2 hover:bg-dark cursor-pointer"
        @click="$router.push('/')"
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

export default {
  name: 'TheHeader',
  emits: ['navigate'],
  components: { PurchaseModal, Menubar },

  computed: {
    ...mapGetters(['isAuthenticated']),
  },

  methods: {
    ...mapActions([LOGOUT_USER]),
  },

  data() {
    return {
      showModal: false,
      items: [
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
          label: 'Coins: 1000',
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
      ],
    };
  },
};
</script>

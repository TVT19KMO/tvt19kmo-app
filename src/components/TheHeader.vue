<template>
  <Menubar :model="items">
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

export default {
  name: 'TheHeader',
  emits: ['navigate'],
  components: { PurchaseModal, Menubar },

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
          label: 'Coins: 1000',
          icon: 'pi pi-fw pi-wallet',
          command: () => {
            this.showModal = true;
          },
          class: 'ml-auto',
        },
      ],
    };
  },
};
</script>

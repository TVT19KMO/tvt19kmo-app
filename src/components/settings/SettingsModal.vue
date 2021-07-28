<template>
  <ConfirmDialog />

  <Toolbar class="p-mb-4">
    <template #left>
      <Button
        label="Change Password"
        icon="pi pi-plus"
        class="p-button-success p-mr-2"
        @click="$emit('changePassword')"
      />
    </template>
  </Toolbar>

</template>

<script>
import useConfirm from '@/compositions/useConfirm';
import { defineComponent } from 'vue-demi';

export default defineComponent({
  emits: ['changePassword'],
  
  methods: {

  },

  setup: () => ({
    ...useConfirm(),
  }),
});
</script>

<style></style>

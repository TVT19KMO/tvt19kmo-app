<template>
  <ConfirmDialog />

  <Toolbar class="p-mb-4">
    <template #left>
      <Button
        label="Add child"
        icon="pi pi-plus"
        class="p-button-success p-mr-2"
        @click="$emit('add')"
      />
    </template>
  </Toolbar>

  <DataTable :value="children" responsiveLayout="scroll">
    <Column field="name" header="Name"></Column>
    <Column field="balance" header="Balance"></Column>
    <Column field="code" header="Linking code"></Column>
    <Column field="device" header="Device code">
      <template #body="{ data: { id, device } }">
        <div v-if="device" class="flex items-center">
          <p>
            <i class="pi pi-android text-primary"></i>
            <span class="mx-2">{{ device }}</span>
          </p>
          <Button
            @click="onRemoveDevice(id)"
            icon="pi pi-times"
            class="p-button-rounded p-button-danger p-button-text"
          />
        </div>
      </template>
    </Column>
  </DataTable>
</template>

<script>
import useConfirm from '@/compositions/useConfirm';
import { defineComponent } from 'vue-demi';

export default defineComponent({
  emits: ['add', 'remove-device'],

  props: {
    // The children displayed in the table.
    children: {
      type: Array,
      required: true,
    },
  },

  methods: {
    // Handles event of user trying to remove a device linked to a child.
    onRemoveDevice(id) {
      this.confirm('Are you sure you want to remove the device?', () => {
        this.$emit('remove-device', id);
      });
    },
  },

  setup: () => ({
    ...useConfirm(),
  }),
});
</script>

<style></style>

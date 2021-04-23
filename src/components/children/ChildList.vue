<template>
  <div>
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
      <Column field="code" header="Code"></Column>
      <Column field="difficulty" header="Difficulty"></Column>
    </DataTable>
  </div>
</template>

<script>
import { defineComponent } from 'vue-demi';

export default defineComponent({
  emits: ['add'],

  props: {
    children: {
      type: Array,
      required: true,
    },
  },
});
</script>

<style></style>

<template>
  <Dialog header="Header" :modal="true">
    <template #header v-if="$slots.header" class="modal-header">
      <slot name="header"></slot>
    </template>

    <template #default v-if="$slots.default" class="modal-body">
      <slot name="default"></slot>
    </template>

    <template #footer v-if="$slots.footer" class="modal-footer">
      <slot name="footer"></slot>
    </template>
  </Dialog>
</template>

<script>
export default {
  name: 'BaseModal',
};
</script>

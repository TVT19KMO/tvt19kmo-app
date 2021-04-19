<template>
  <Dialog header="Header" :modal="true">
    <template #header v-if="$slots.header">
      <slot name="header"></slot>
    </template>

    <template #default v-if="$slots.default">
      <slot name="default"></slot>
    </template>

    <template #footer v-if="$slots.footer">
      <slot name="footer"></slot>
    </template>
  </Dialog>
</template>

<script>
/**
 * Use this component to display a modal window.
 * @author JIkaheimo
 */

export default {
  name: 'BaseModal',
};
</script>

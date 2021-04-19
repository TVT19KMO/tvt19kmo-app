<template>
  <div class="p-field">
    <slot name="label">
      <label v-if="label" :for="$attrs.id">{{ label }}</label>
    </slot>
    <component :is="component" v-bind="$attrs" :class="{ 'p-invalid': error }" />

    <slot name="error">
      <small v-if="error" class="p-error">{{ error }}</small>
    </slot>
  </div>
</template>

<script>
export default {
  name: 'BaseInput',

  inheritAttrs: false,

  props: {
    kind: {
      type: String,
      default: 'input',
    },

    label: {
      type: String,
      required: false,
    },

    error: {
      type: String,
      required: false,
    },
  },

  computed: {
    component({ kind }) {
      switch (kind) {
        case 'password':
          return 'Password';
        case 'dropdown':
          return 'Dropdown';
      }
      return 'InputText';
    },
  },
};
</script>

<style scoped lang="postcss"></style>

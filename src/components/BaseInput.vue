<template>
  <div class="p-field">
    <label v-if="label" :for="$attrs.id">{{ label }}</label>
    <component :is="component" v-bind="$attrs" :class="{ 'p-invalid': error }" />
    <small v-if="error" class="p-error">{{ error }}</small>
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
      }
      return 'InputText';
    },
  },
};
</script>

<style scoped lang="postcss"></style>

<template>
  <label>
    <slot name="label"></slot>
    <component :is="componentType" v-bind="$attrs" />
  </label>
</template>

<script>
export default {
  name: 'BaseInput',
  inheritAttrs: false,

  props: {
    // Flag indicating if the input is normal or textarea.
    textarea: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    componentType() {
      return this.textarea ? 'textarea' : 'input';
    },
  },
};
</script>

<style scoped lang="postcss">
label {
  @apply text-sm font-semibold text-secondary font-sans;
}

input,
textarea {
  @apply block p-2 mt-1 bg-white text-gray-700;
  @apply border rounded-sm w-full border-white text-left;
  @apply text-lg;
}

input[type='checkbox'],
input[type='radio'] {
  vertical-align: middle;
  @apply ml-3 relative inline-block;
  bottom: 1px;
}

input[type='radio'] {
  bottom: 2px;
}
</style>

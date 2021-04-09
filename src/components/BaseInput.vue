<template>
  <label>
    <slot name="label" />
    <component
      :is="componentType"
      v-bind="$attrs"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </label>
</template>

<script>
export default {
  name: 'BaseInput',
  inheritAttrs: false,

  emits: ['update:modelValue'],

  props: {
    // Flag indicating if the input is normal or textarea.
    textarea: {
      type: Boolean,
      default: false,
    },
    modelValue: {
      required: true,
    },
  },

  computed: {
    componentType: ({ textarea }) => (textarea ? 'textarea' : 'input'),
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
  @apply border rounded-sm w-full border-gray-300 text-left;
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

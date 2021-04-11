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

<style scoped lang="postcss"></style>

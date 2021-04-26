<template>
  <Button
    v-bind="$attrs"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
    :label="labelToShow"
  />
</template>

<script>
/**
 * Use this component to display a button.
 * @author JIkaheimo
 */
export default {
  props: {
    expandable: {
      type: Boolean,
      default: false,
    },
  },

  inheritAttrs: false,

  data: () => ({
    isHovered: false,
  }),

  computed: {
    labelToShow: ({ $attrs, isHovered, expandable }) => {
      if (!expandable) return $attrs.label;
      if (!isHovered) return null;
      return $attrs.label;
    },
  },
};
</script>

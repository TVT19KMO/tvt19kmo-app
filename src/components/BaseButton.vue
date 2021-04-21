<template>
  <Button class="button">
    <ClipLoader class="mx-auto" v-if="loading" :loading="loading" :color="color" :size="size" />
  </Button>
</template>

<script>
/**
 * Use this component to display a button.
 * @author JIkaheimo
 */
export default {
  // TODO: Make these props if needed.
  data: () => ({
    color: 'white',
    size: '1rem',
  }),

  props: {
    // Displays a loading circle instead of text.
    loading: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="postcss" scoped></style>

<template>
  <div class="mx-3 md:mx-10">
    <h2 class="text-xl my-5 text-white">{{ title }}</h2>
    <slot></slot>
  </div>
</template>

<script>
/**
 * Simple component to wrap each page with consistent styling.
 *
 * @author JIkaheimo
 */

export default {
  data: () => ({
    showSidebar: true,
  }),

  props: {
    // Title of the page.
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style></style>

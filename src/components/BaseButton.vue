<template>
  <Button class="button">
    <ClipLoader class="mx-auto" v-if="loading" :loading="loading" :color="'white'" :size="'1rem'" />
  </Button>
</template>

<script>
export default {
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="postcss" scoped></style>

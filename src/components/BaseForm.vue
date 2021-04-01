<template>
  <div class="form-wrapper">
    <header v-if="$slots.header">
      <slot name="header"></slot>
    </header>
    <form>
      <slot></slot>

      <BaseButton v-if="$slots.submit">
        <slot name="submit"></slot>
      </BaseButton>
    </form>
  </div>
</template>

<script>
export default {
  name: 'BaseForm',
};
</script>

<style scoped lang="postcss">
.form-wrapper {
  @apply p-5 bg-dark shadow-lg;
}
header {
  @apply mb-5 text-white font-bold;
}
form {
  @apply flex flex-col space-y-4;
}
</style>

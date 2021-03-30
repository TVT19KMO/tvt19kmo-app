<template>
  <Heading type="h2"> Dashboard </Heading>

  <div class="flex space-x-6">
    <BaseList class="main-list">
      <template #header>
        <Heading type="h3">Recent tasks</Heading>
      </template>
    </BaseList>

    <BaseList class="main-list">
      <template #header>
        <Heading type="h3">Recent activity</Heading>
      </template>
    </BaseList>
  </div>
</template>

<script>
export default {};
</script>

<style lang="postcss" scoped>
.main-list {
  @apply w-64;
}
</style>

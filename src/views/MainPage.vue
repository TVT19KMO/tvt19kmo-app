<template>
  <Heading type="h2"> Dashboard </Heading>

  <div class="flex space-x-6 mt-6">
    <BaseList class="main-list" hoverable>
      <template #header>
        <Heading type="h3">Recent tasks</Heading>
      </template>
    </BaseList>

    <BaseList class="main-list" hoverable>
      <template #header>
        <Heading type="h3">Recent activity</Heading>
      </template>
    </BaseList>
  </div>
</template>

<script>
export default {
  data() {
    return {
      recentTasks: [''],
    };
  },
};
</script>

<style lang="postcss" scoped>
.main-list {
  @apply w-1/3;
}
</style>

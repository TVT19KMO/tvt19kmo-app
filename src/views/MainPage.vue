<template>
  <Heading type="h2"> Dashboard </Heading>

  <div class="flex space-x-6 mt-6 items-start">
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

    <ActivityChart class="h-full w-full bg-dark" />
  </div>
</template>

<script>
import ActivityChart from '@/components/ActivityChart.vue';

export default {
  components: {
    ActivityChart,
  },

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
  max-width: 20rem;
}
</style>

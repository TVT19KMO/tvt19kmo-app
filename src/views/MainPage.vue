<template>
  <PageWrapper title="Dashboard">
    <div class="flex space-x-6 mt-6 items-start w-full">
      <AssignmentTaskList
        class="w-full max-w-3xl"
        :tasks="ASSIGNED_TASKS"
        :loading="tasksLoading"
      />

      <!--
    <BaseList class="main-list" hoverable>
      <template #header>
        <Heading type="h3">Recent activity</Heading>
      </template>
    </BaseList>

    <ActivityChart class="h-full w-full bg-dark" />
    --></div>
  </PageWrapper>
</template>

<script>
import { defineComponent, onMounted, ref } from 'vue-demi';
import { mapGetters } from 'vuex';

import AssignmentTaskList from '@/components/tasks/AssignmentTaskList.vue';

import useTasks from '@/compositions/useTasks';

import { ASSIGNED_TASKS } from '@/store/tasks/getters';

export default defineComponent({
  components: {
    AssignmentTaskList,
  },

  computed: {
    ...mapGetters([ASSIGNED_TASKS]),
  },

  setup() {
    const tasksLoading = ref(true);
    const { getAssignedTasks, getDifficulties, getRooms } = useTasks();

    onMounted(async () => {
      await Promise.all([getDifficulties(), getRooms()]);
      await getAssignedTasks();
      tasksLoading.value = false;
    });

    return { tasksLoading };
  },
});
</script>

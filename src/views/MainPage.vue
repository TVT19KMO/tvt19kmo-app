<template>
  <PageWrapper title="Dashboard">
    <Toast />

    <div class="flex space-x-6 mt-6 items-start w-full">
      <AssignmentTaskList
        class="w-full max-w-3xl"
        @complete="onTaskComplete"
        @delete="onTaskDelete"
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
import { mapActions, mapGetters } from 'vuex';

import ActivityChart from '@/components/ActivityChart.vue';
import AssignmentTaskList from '@/components/tasks/AssignmentTaskList.vue';

import useTasks from '@/compositions/useTasks';
import useToast from '@/compositions/useToast';

import { ASSIGNED_TASKS } from '@/store/tasks/getters';
import { COMPLETE_TASK, DELETE_ASSIGNED_TASK } from '@/store/tasks/actions';

export default defineComponent({
  components: {
    ActivityChart,
    AssignmentTaskList,
  },

  computed: {
    ...mapGetters([ASSIGNED_TASKS]),
  },

  methods: {
    ...mapActions([COMPLETE_TASK, DELETE_ASSIGNED_TASK]),

    async onTaskComplete(id) {
      try {
        await this[COMPLETE_TASK](id);
        this.showSuccess('Successfully marked the task as completed!');
      } catch (_) {
        this.showError('An error occured while marking a task as completed...');
      }
    },

    async onTaskDelete(id) {
      try {
        await this[DELETE_ASSIGNED_TASK](id);
        this.showSuccess('Successfully deleted the task!');
      } catch (_) {
        this.showError('An error occured while deleting the task..');
      }
    },
  },

  setup() {
    const tasksLoading = ref(true);
    const { getAssignedTasks, getDifficulties, getRooms } = useTasks();

    onMounted(async () => {
      await Promise.all([getDifficulties(), getRooms()]);
      await getAssignedTasks();
      tasksLoading.value = false;
    });

    return { tasksLoading, ...useToast() };
  },
});
</script>

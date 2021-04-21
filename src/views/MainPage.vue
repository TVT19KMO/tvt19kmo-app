<template>
  <div class="container mx-auto">
    <Toast />
    <h2 class="text-xl my-5 text-white">Dashboard</h2>
    <div class="flex space-x-6 mt-6 items-start w-full">
      <AssignmentTaskList @complete="completeTask" :tasks="ASSIGNED_TASKS" />

      <!--
    <BaseList class="main-list" hoverable>
      <template #header>
        <Heading type="h3">Recent activity</Heading>
      </template>
    </BaseList>

    <ActivityChart class="h-full w-full bg-dark" />
    --></div>
  </div>
</template>

<script>
import ActivityChart from '@/components/ActivityChart.vue';
import useTasks from '@/compositions/useTasks';
import { defineComponent, onMounted } from 'vue-demi';
import { mapActions, mapGetters } from 'vuex';
import { ASSIGNED_TASKS } from '@/store/tasks/getters';
import { COMPLETE_TASK } from '@/store/tasks/actions';
import AssignmentTaskList from '@/components/tasks/AssignmentTaskList.vue';

export default defineComponent({
  components: {
    ActivityChart,
    AssignmentTaskList,
  },

  computed: {
    ...mapGetters([ASSIGNED_TASKS]),
  },

  methods: {
    ...mapActions([COMPLETE_TASK]),

    async completeTask(id) {
      try {
        const res = await this[COMPLETE_TASK](id);
      } catch (error) {
        this.$toast.add({
          severity: 'error',
          summary: 'Error!',
          detail: 'An error occured while marking a task as completed...',
          life: 3000,
        });
      }
    },
  },

  setup() {
    const { getAssignedTasks, getDifficulties, getRooms } = useTasks();

    onMounted(async () => {
      await Promise.all([getDifficulties(), getRooms()]);
      await getAssignedTasks();
    });
  },
});
</script>

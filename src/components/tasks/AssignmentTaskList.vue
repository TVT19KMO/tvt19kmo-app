<template>
  <Toast />
  <ConfirmDialog />

  <DataView v-bind="$attrs" layout="list" :paginator="true" :rows="4" :value="tasks">
    <template #header>
      <div class="p-grid p-nogutter">Assigned Tasks</div>
    </template>

    <template #empty>
      <div class="my-4">
        <template v-if="loading">
          <ClipLoader class="mx-auto" v-if="true" :loading="true" color="white" size="3rem" />
          <p class="text-center">Loading data...</p>
        </template>
        <template>
          <p class="text-center">No data available.</p>
        </template>
      </div>
    </template>

    <template #list="{ data }">
      <AssignmentTaskListItem
        @complete="onTaskComplete"
        @delete="onTaskDelete"
        @reassign="onTaskReassign"
        :task-assignment="data"
      />
    </template>
  </DataView>
</template>

<script>
import { defineComponent } from 'vue-demi';

import AssignmentTaskListItem from './AssignmentTaskListItem.vue';

import { COMPLETE_TASK, DELETE_ASSIGNED_TASK, REASSIGN_TASK } from '@/store/tasks/actions';
import { mapActions, mapMutations } from 'vuex';
import { useConfirm, useToast } from '@/compositions';
import { SET_BALANCE } from '@/store/user/mutations';

export default defineComponent({
  components: { AssignmentTaskListItem },

  inheritAttrs: false,

  props: {
    // The list of tasks to display.
    tasks: {
      type: Array,
      required: true,
    },

    // Is the list loading.
    loading: {
      type: Boolean,
      required: true,
    },
  },

  methods: {
    ...mapActions([COMPLETE_TASK, DELETE_ASSIGNED_TASK, REASSIGN_TASK]),
    ...mapMutations([SET_BALANCE]),

    onTaskComplete(task) {
      this.confirm('Are you sure you want to mark the task as completed?', async () => {
        try {
          await this[COMPLETE_TASK](task);
          this.showSuccess('Successfully marked the task as completed!');
        } catch (_) {
          this.showError('An error occured while marking a task as completed...');
        }
      });
    },

    onTaskDelete(task) {
      this.confirm('Are you sure you want to delete the task?', async () => {
        try {
          const { balance } = await this[DELETE_ASSIGNED_TASK](task);
          this[SET_BALANCE](balance);
          this.showSuccess('Successfully deleted the task!');
        } catch (_) {
          this.showError('An error occured while deleting the task..');
        }
      });
    },

    onTaskReassign(task) {
      this.confirm('Are you sure you want to reassign the task?', async () => {
        try {
          const { balance } = await this[REASSIGN_TASK](task);
          this[SET_BALANCE](balance);
          this.showSuccess('Successfully reassigned the task!');
        } catch (_) {
          this.showError('An error occured while reassigning the task...');
        }
      });
    },
  },

  setup: () => ({ ...useToast(), ...useConfirm() }),
});
</script>

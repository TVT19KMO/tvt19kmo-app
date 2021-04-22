<template>
  <DataView layout="list" :paginator="true" :rows="4" :value="tasks">
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
      <AssignmentTaskListItem @complete="$emit('complete', $event)" :task-assignment="data" />
    </template>
  </DataView>
</template>

<script>
import { defineComponent } from 'vue-demi';
import AssignmentTaskListItem from './AssignmentTaskListItem.vue';

export default defineComponent({
  components: { AssignmentTaskListItem },

  props: {
    tasks: {
      type: Array,
      required: true,
    },

    loading: {
      type: Boolean,
      required: true,
    },
  },

  emits: ['complete'],
});
</script>

<style></style>

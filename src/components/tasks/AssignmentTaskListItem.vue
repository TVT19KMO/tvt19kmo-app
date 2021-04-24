<template>
  <div class="p-5 w-full space-y-3 flex flex-wrap">
    <div class="w-full flex justify-between flex-wrap space-y-3">
      <!-- Task name and assignee -->
      <div>
        <div class="text-lg font-bold text-green-400">{{ taskAssignment.task.name }}</div>
        <p>
          <i class="pi pi-user pr-1 text-yellow-400"></i
          ><span class="product-category">{{ taskAssignment.assignee.name }}</span>
        </p>
      </div>

      <!-- Task difficulty and room -->
      <div class="flex space-x-1 items-center">
        <Tag severity="info" :value="roomText" rounded />
        <Tag :severity="difficultySeverity" :value="difficultyText" rounded />
      </div>
    </div>

    <div class="w-full flex flex-wrap justify-between space-y-3 items-center">
      <!-- Task timestamps -->
      <div class="space-y-1">
        <p class="flex items-center">
          <i class="pi pi-clock pr-1 text-gray-100"></i>
          <span class="font-semibold">{{ taskAssignment.assigned }}</span>
        </p>
        <p class="flex items-center" v-if="taskAssignment.finished">
          <i class="pi pi-check pr-1 text-green-300"></i
          ><span class="font-semibold">{{ taskAssignment.finished }}</span>
        </p>
      </div>

      <!-- Task actions -->
      <div>
        <Button
          class="action-button p-button-raised"
          v-if="!taskAssignment.finished"
          icon="pi pi-check"
          @click="$emit('complete', taskAssignment.id)"
          label="Ready"
        ></Button>
        <Button
          class="action-button p-button-raised"
          icon="pi pi-trash"
          @click="deleteAssignedTask(taskAssignment.id)"
          label="Delete"
        ></Button>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue-demi';
import axios from 'axios';

export default defineComponent({
  name: 'AssignmentTaskListItem',

  emits: ['complete'],

  methods: {
    
    deleteAssignedTask(id) {
      axios.delete('http://localhost:5000/api/assigned-tasks/' + id, {
      data: { id },
      headers: {
          "Authorization": `Bearer ` + localStorage.getItem("user-token"),
          "Content-Type": "application/json"}
      })
      .then(() => { 
          console.log("Task deleted")
      })
      .catch(error => { 
          console.log(error)
      })
    }
  },
  
  computed: {
    difficultySeverity: ({ taskAssignment }) => {
      switch (taskAssignment.task.difficulty.level) {
        case 1:
          return 'success';
        case 2:
          return 'warning';
        case 3:
          return 'danger';
      }
      return 'success';
    },

    roomText: ({ taskAssignment }) => taskAssignment.task.room.name,

    difficultyText: ({ taskAssignment }) => taskAssignment.task.difficulty.name,
  },

  props: {
    taskAssignment: {
      type: Object,
      required: true,
    },
  },
});
</script>


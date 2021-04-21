<template>
  <Dialog
    v-bind="$attrs"
    :style="{ width: '450px' }"
    header="Assign task"
    :modal="true"
    class="p-fluid"
  >
    <BaseInput
      :feedback="false"
      id="task"
      label="Task"
      kind="dropdown"
      v-model="task"
      :error="getErrorMessage('task')"
      :options="tasks"
      optionValue="id"
      optionLabel="name"
      placeholder="Select a task to assign"
    >
      <template #option="{ option: { name, difficulty } }">
        <p>
          {{ name }} <span>({{ difficulty }})</span>
        </p>
      </template>
    </BaseInput>

    <BaseInput
      :feedback="false"
      id="child"
      label="Child"
      kind="dropdown"
      v-model="child"
      :error="getErrorMessage('task')"
      :options="children"
      optionValue="id"
      optionLabel="name"
      placeholder="Select child you want to assign the tasks"
    >
      <template v-for="child in children" :key="child.name">
        <p >
          {{ child.name }} 
        </p>
      </template>
    </BaseInput>
    
    <template #footer>
      <Button label="Cancel" icon="pi pi-times" class="p-button-text" @click="$emit('close')" />
      <Button label="Save" icon="pi pi-check" class="p-button-text" />
    </template>
  </Dialog>
</template>

<script>
import useVuelidation from '@/compositions/useVuelidation';
import { required } from '@vuelidate/validators';
import { defineComponent } from 'vue';
import axios from 'axios'

export default defineComponent({
  name: 'TaskAssignModal',

  props: {
    tasks: {
      type: Array,
      required: true,
    },
  },

  data: () => ({
    task: '',
    child: '',
    children: [],
  }),

  mounted: async function() {
    axios
      .get('http://localhost:5000/api/children')    
      .then((response) => {
        
        this.children = response.data 
        console.log(response.data)
        
      })
      .catch(error => {
        console.log(error);
        this.errored = true
      })
  },

  validations: () => ({
    task: { required },
    
  }),

  methods: {},

  computed: {},

  setup: () => ({
    ...useVuelidation(),
  }),

  emits: ['close','save'],
});
</script>

<style></style>

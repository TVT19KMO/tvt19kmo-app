<template>
  <BaseModal v-bind="$attrs" :style="{ width: '450px' }" header="Assign task" class="p-fluid">
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
      :error="getErrorMessage('child')"
      :options="children"
      optionValue="id"
      optionLabel="name"
      placeholder="Select child you want to assign the tasks"
    />

    <template #footer>
      <Button label="Cancel" icon="pi pi-times" class="p-button-text" @click="$emit('close')" />
      <Button label="Save" icon="pi pi-check" class="p-button-text" @click="save" />
    </template>
  </BaseModal>
</template>

<script>
import useChildData from '@/compositions/useChildData';
import useVuelidation from '@/compositions/useVuelidation';
import { required } from '@vuelidate/validators';
import { defineComponent, onMounted } from 'vue';

export default defineComponent({
  name: 'TaskAssignModal',

  props: {
    tasks: {
      type: Array,
      required: true,
    },
  },

  emits: ['close', 'save'],

  data: () => ({
    task: '',
    child: '',
  }),

  validations: () => ({
    task: { required },
    child: { required },
  }),

  methods: {
    save() {
      this.submitForm(() => {
        this.$emit('save', { task: this.task, children: [this.child] });
      });
    },
  },

  setup: () => {
    const { children, getChildren } = useChildData();

    onMounted(async () => {
      await getChildren();
    });

    return {
      children,
      ...useVuelidation(),
    };
  },
});
</script>

<style></style>

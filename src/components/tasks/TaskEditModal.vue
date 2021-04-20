<template>
  <Dialog
    v-bind="$attrs"
    :style="{ width: '450px' }"
    header="Task Details"
    :modal="true"
    class="p-fluid"
  >
    <template #title> Create Task </template>

    <div class="p-fluid">
      <BaseInput
        label="Name"
        id="task-name"
        type="text"
        v-model.trim="name"
        :error="getErrorMessage('name')"
        autofocus
      />

      <BaseInput kind="textarea" label="Note" id="task-note" type="text" v-model="note" rows="5" />

      <BaseInput
        kind="dropdown"
        v-model="room"
        optionLabel="name"
        optionValue="id"
        :options="rooms"
        placeholder="Select a room"
        :error="getErrorMessage('room')"
      />

      <BaseInput
        kind="dropdown"
        v-model="difficulty"
        optionLabel="name"
        :options="difficulties"
        optionValue="id"
        placeholder="Select a difficulty"
        :error="getErrorMessage('difficulty')"
      >
        <template #option="{ option: difficulty }">
          <p>
            {{ difficulty.name }} <span>({{ difficulty.reward }})</span>
          </p>
        </template>
      </BaseInput>
    </div>

    <template #footer>
      <Button label="Cancel" icon="pi pi-times" class="p-button-text" @click="$emit('close')" />
      <Button label="Save" icon="pi pi-check" class="p-button-text" @click="save" />
    </template>
  </Dialog>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { required } from '@vuelidate/validators';
import { mapFields } from 'vuex-map-fields';
import useVuelidation from '@/compositions/useVuelidation';

export default defineComponent({
  name: 'TaskEditModal',

  emits: ['save', 'close'],

  props: {
    difficulties: {
      type: Array,
      default: [],
    },

    rooms: {
      type: Array,
      default: [],
    },
  },

  validations() {
    return {
      name: { required },
      room: { required },
      difficulty: { required },
    };
  },

  methods: {
    save() {
      this.submitForm(() => {
        this.$emit('save');
      });
    },
  },

  computed: {
    ...mapFields([
      'tasks.selectedTask.difficulty',
      'tasks.selectedTask.room',
      'tasks.selectedTask.note',
      'tasks.selectedTask.name',
    ]),
  },

  setup: () => ({
    ...useVuelidation(),
  }),
});
</script>

<style></style>

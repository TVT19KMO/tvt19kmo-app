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
        id="child-name"
        type="text"
        v-model.trim="name"
        :error="getErrorMessage('name')"
        autofocus
      />
    </div>

    <template #footer>
      <Button label="Cancel" icon="pi pi-times" class="p-button-text" @click="$emit('close')" />
      <Button label="Save" icon="pi pi-check" class="p-button-text" @click="submit" />
    </template>
  </Dialog>
</template>

<script>
import { defineComponent } from 'vue';
import { required } from '@vuelidate/validators';
import useVuelidation from '@/compositions/useVuelidation';

export default defineComponent({
  name: 'ChildEditModal',

  emits: ['save', 'close'],

  props: {
    child: {
      type: Object,
      required: true,
    },
  },

  watch: {
    child(child) {
      this.name = child.name ?? '';
    },
  },

  data: () => ({
    name: '',
  }),

  validations: () => ({
    name: { required },
  }),

  methods: {
    submit() {
      this.submitForm(() => {
        this.$emit('save', { name: this.name });
      });
    },
  },

  setup: () => ({
    ...useVuelidation(),
  }),
});
</script>

<style></style>

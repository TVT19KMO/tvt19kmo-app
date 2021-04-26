<template>
  <div>
    <Menu ref="menu" :model="items" :popup="true" />
    <BaseButton
      icon="pi pi-angle-down"
      label="Actions"
      class="p-button-success p-mr-2"
      @click="onToggleMenu"
    />
  </div>
</template>

<script>
import { defineComponent } from 'vue-demi';

export default defineComponent({
  name: 'TaskListItem',

  props: {
    task: {
      type: Object,
      required: true,
    },
  },

  emits: ['delete', 'edit'],

  data: function () {
    return {
      items: [
        {
          label: 'Edit',
          icon: 'pi pi-pencil',
          command: () => {
            this.$emit('edit', this.task.id);
          },
        },
        {
          label: 'Delete',
          icon: 'pi pi-trash',
          command: () => {
            this.$emit('delete', this.task.id);
          },
        },
      ],
    };
  },

  methods: {
    onToggleMenu($event) {
      this.$refs.menu.toggle($event);
    },
  },
});
</script>

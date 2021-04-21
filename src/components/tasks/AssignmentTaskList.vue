<template>
  <DataView layout="list" :paginator="true" :rows="5" :value="tasks">
    <template #header>
      <div class="p-grid p-nogutter">Assigned Tasks</div>
    </template>

    <template #list="{ data: { task, assignee, assigned, id } }">
      <div class="p-5 w-full">
        <div class="flex space-x-5 justify-between">
          <div>
            <div class="text-lg font-bold">{{ task.name }}</div>
            <i class="pi pi-user product-category-icon"></i
            ><span class="product-category">{{ assignee.name }}</span>
          </div>
          <div class="flex space-x-2 items-center">
            <Tag :value="task.room.name" rounded />
            <Tag :value="task.difficulty.name" rounded />
          </div>
          <div class="space-x-3">
            <span>{{ assigned }}</span>
            <Button
              v-if="!task.completed"
              icon="pi pi-check"
              @click="$emit('complete', id)"
              label="Ready"
            ></Button>
          </div>
        </div>
      </div>
    </template>
  </DataView>
</template>

<script>
export default {
  props: {
    tasks: {
      type: Array,
      required: true,
    },
  },

  emits: ['complete'],
};
</script>

<style></style>

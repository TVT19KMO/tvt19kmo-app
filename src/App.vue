<template>
  <div class="wrapper">
    <BaseInput :textarea="true" />
    <BaseInput />
    <TaskForm />
    <TaskList />
  </div>
</template>

<script>
import TaskForm from '@/components/tasks/TaskForm.vue';
import TaskList from '@/components/tasks/TaskList.vue';

export default {
  components: { TaskForm, TaskList },
};
</script>

<style scoped lang="postcss">
.wrapper {
  @apply text-red-50;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
</style>

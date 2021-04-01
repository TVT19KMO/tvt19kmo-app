<template>
  <div class="wrapper">
    <BaseInput :textarea="true" />
    <BaseInput />
    <TaskForm />
  </div>
</template>

<script>
import TaskForm from '@/components/TaskForm.vue';

export default {
  components: { TaskForm },
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

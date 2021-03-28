<template>
  <h2 class="text-lg">Create Task</h2>
  <form class="flex flex-col">
    <label>
      Name:
      <input type="text" name="task-name" class="shadow-sm" />
    </label>
    <label>
      Points:
      <input type="range" name="task-points" class="shadow-sm" />
    </label>
    <label>
      Repeating:
      <input type="checkbox" name="task-repeating" class="shadow-sm" />
    </label>
    <BaseButton type="submit">Create</BaseButton>
  </form>
</template>

<script>
export default {};
</script>

<style></style>

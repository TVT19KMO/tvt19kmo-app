<template>
  <BaseForm class="">
    <template #header>
      <h2 class="text-lg">Create Task</h2>
    </template>

    <BaseInput type="text" name="task-name">
      <template #label>Name:</template>
    </BaseInput>

    <BaseInput class="w-full" :textarea="true" name="task-description">
      <template #label>Description:</template>
    </BaseInput>

    <BaseInput type="range" name="task-points">
      <template #label>Points:</template>
    </BaseInput>

    <BaseInput type="checkbox" name="task-repeating">
      <template #label>Repeating:</template>
    </BaseInput>

    <BaseButton type="submit">Create</BaseButton>
  </BaseForm>
</template>

<script>
export default {};
</script>

<style scoped lang="postcss"></style>

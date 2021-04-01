<template>
  <BaseForm class="">
    <template #header>
      <Heading :type="h3" class="text-lg">Create Task</Heading>
    </template>

    <BaseInput type="text" name="task-name">
      <template #label>Name:</template>
    </BaseInput>

    <BaseInput class="w-full" :textarea="true" name="task-note">
      <template #label>Note:</template>
    </BaseInput>

    <BaseInput type="range" name="task-points">
      <template #label>Points:</template>
    </BaseInput>

    <BaseInput type="checkbox" name="task-repeating">
      <template #label>Repeating:</template>
    </BaseInput>

    <template #submit>Create</template>
  </BaseForm>
</template>

<script>
export default {};
</script>

<style scoped lang="postcss"></style>

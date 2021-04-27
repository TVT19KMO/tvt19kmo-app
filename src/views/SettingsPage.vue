<template>
  <PageWrapper title="Manage your settings">

    <SettingsModal
      v-if="showChildEdit"
      @close="showChildEdit = false"
      :child="child"
      @save="onSaveChild"
      v-model:visible="showChildEdit"
    />
  </PageWrapper>
</template>

<script>

export default {
};
</script>

<style></style>

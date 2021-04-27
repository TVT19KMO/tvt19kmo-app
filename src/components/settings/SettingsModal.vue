<template>
  <Dialog
    v-bind="$attrs"
    :style="{ width: '450px' }"
    header="Setting Details"
    :modal="true"
    class="p-fluid"
  >
    <template #title> Manage settings </template>

    <div class="p-fluid">
      <BaseInput
        label="Old Password"
        id="oldPassword"
        type="oldPassword"
        v-model.trim="name"
        :error="getErrorMessage('oldPassword')"
        autofocus
      />
      <BaseInput
        label="New Password"
        id="newPassword"
        type="newPassword"
        v-model.trim="name"
        :error="getErrorMessage('newPassword')"
        autofocus
      />
      <BaseInput
        label="New Password again"
        id="newPasswordAgain"
        type="newPasswordAgain"
        v-model.trim="name"
        :error="getErrorMessage('newPasswordAgain')"
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
  name: 'SettingsModal'
});
</script>

<style></style>
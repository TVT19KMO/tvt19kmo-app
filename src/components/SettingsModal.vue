<template>
  <Dialog
    v-bind="$attrs"
    :style="{ width: '450px' }"
    header="User details"
    :modal="true"
    class="p-fluid"
  >
    <BaseInput
      id="username"
      v-model.trim="user.username"
      label="Username"
      :error="getErrorMessage('user.username')"
    />

    <BaseInput
      id="email"
      v-model.trim="user.email"
      label="Email"
      :error="getErrorMessage('user.email')"
    />

    <BaseInput
      id="password"
      label="Password"
      v-model.trim="user.password"
      kind="password"
      :error="getErrorMessage('user.password')"
      toggleMask
    />

    <BaseInput
      id="confirm-password"
      label="Confirm Password"
      v-model.trim="user.passwordConfirm"
      kind="password"
      :error="getErrorMessage('user.passwordConfirm')"
      toggleMask
    />

    <template #footer>
      <Button label="Cancel" icon="pi pi-times" class="p-button-text" @click="$emit('close')" />
      <Button label="Save" icon="pi pi-check" class="p-button-text" @click="save" />
    </template>
  </Dialog>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { required, email, sameAs, helpers } from '@vuelidate/validators';
import useVuelidation from '@/compositions/useVuelidation';

export default defineComponent({
  name: 'SettingsModal',

  emits: ['save', 'close'],

  data: () => ({
    user: {
      username: '',
      email: '',
      password: '',
      passwordConfirm: '',
    },
  }),

  validations() {
    return {
      user: {
        username: {
          required,
        },
        email: {
          required,
          email,
        },
        password: {
          required,
        },
        passwordConfirm: {
          required,
          sameAs: helpers.withMessage('Passwords must be equal.', sameAs(this.user.password)),
        },
      },
    };
  },

  setup: () => ({
    ...useVuelidation(),
  }),
});
</script>

<style></style>

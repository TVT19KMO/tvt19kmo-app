<template>
  <BaseForm @submit.prevent="$emit('submit', user)">
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

    <slot name="error"> </slot>

    <BaseButton :loading="isLoading" label="Register" type="submit" />
  </BaseForm>
</template>

<script>
import { defineComponent } from 'vue-demi';
import { required, email, sameAs, helpers } from '@vuelidate/validators';
import useVuelidation from '@/compositions/useVuelidation';

export default defineComponent({
  name: 'RegistrationForm',

  emits: ['submit'],

  props: {
    isLoading: {
      type: Boolean,
      default: false,
    },
  },

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

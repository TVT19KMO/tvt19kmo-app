<template>
  <form class="p-fluid" @submit.prevent="$emit('submit', user)">
    <BaseInput
      id="username"
      v-model.trim="user.username"
      label="Username"
      :error="getErrorMessage('user.username')"
    />

    <BaseInput
      :feedback="false"
      id="password"
      label="Password"
      v-model.trim="user.password"
      kind="password"
      :error="getErrorMessage('user.password')"
      toggleMask
    />

    <slot name="error"> </slot>

    <BaseButton :loading="isLoading" label="Login" type="submit" />
  </form>
</template>

<script>
import useVuelidation from '@/compositions/useVuelidation';
import { required } from '@vuelidate/validators';
import { defineComponent } from 'vue-demi';

export default defineComponent({
  name: 'LoginForm',

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
      password: '',
    },
  }),

  validations: () => ({
    user: {
      username: { required },
      password: { required },
    },
  }),

  setup: () => ({
    ...useVuelidation(),
  }),
});
</script>

<style></style>

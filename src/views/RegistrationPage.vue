<template>
  <div class="flex items-center w-screen">
    <div
      class="hidden md:w-3/5 h-screen main-page__wrapper md:flex justify-center items-center"
      :style="{ backgroundImage: `url(${background})` }"
    >
      <p class="bg-opacity-50 bg-dark p-1 text-white text-lg">
        Make cleaning tasks fun for your children in an interactive way!
      </p>
    </div>

    <Card class="mx-auto w-full md:w-1/3">
      <template #title> Register a new account </template>

      <template #content>
        <form class="p-fluid" @submit.prevent="createUser">
          <BaseInput
            id="username"
            v-model="user.username"
            label="Username"
            :error="isSubmitted && !user.username ? 'Username is required' : ''"
          />

          <BaseInput
            id="email"
            v-model="user.email"
            label="Email"
            :error="isSubmitted && !user.email ? 'Email is required' : ''"
          />

          <BaseInput
            id="password"
            label="Password"
            v-model="user.password"
            kind="password"
            :error="isSubmitted && !user.password ? 'Password is required' : ''"
            toggleMask
          />

          <BaseInput
            id="confirm-password"
            label="Confirm Password"
            v-model="user.passwordConfirm"
            kind="password"
            :error="passwordConfirmError"
            toggleMask
          />

          <Button label="Register" type="submit" />
        </form>
      </template>

      <template #footer>
        <router-link to="login">Already have an account?</router-link>
      </template>
    </Card>
  </div>
</template>

<script>
import background from '@/assets/bg_1.jpeg';
import useVuelidate from '@vuelidate/core';
import { required } from '@vuelidate/validators';
import { registerUser } from '@/api';
import { mapActions } from 'vuex';
import { LOGIN_USER } from '@/store/user/actions';

export default {
  data() {
    return {
      background,
      isSubmitted: false,
      user: {
        username: '',
        email: '',
        password: '',
        passwordConfirm: '',
      },
    };
  },

  validations() {
    return {
      user: {
        username: { required },
        email: { required },
        password: { required },
        passwordConfirm: {
          required,
          isEqual(value) {
            return value === this.user.password;
          },
        },
      },
    };
  },

  computed: {
    passwordConfirmError({ user: { password, passwordConfirm }, isSubmitted }) {
      if (!isSubmitted) return '';
      if (!passwordConfirm) return 'Confirm password is required!';
      if (password !== passwordConfirm) return 'Passwords do not match!';
      return '';
    },
  },

  methods: {
    ...mapActions([LOGIN_USER]),

    async createUser() {
      this.v$.$touch();
      this.isSubmitted = true;
      if (this.v$.$error) return;
      try {
        await registerUser(this.user);
        await this[LOGIN_USER](this.user);
        this.$router.push({ name: 'tasks' });
      } catch (e) {}
    },
  },

  setup() {
    return {
      v$: useVuelidate(),
    };
  },
};
</script>

<style></style>

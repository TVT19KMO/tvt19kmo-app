<template>
  <div class="flex items-center w-screen h-full">
    <div
      class="fixed md:relative w-full md:w-3/5 image-wrapper md:flex bg-cover justify-center items-center h-full"
      :style="{ backgroundImage: `url(${background})` }"
    >
      <p
        class="hidden md:inline-block bg-opacity-50 mx-auto text-center bg-dark p-3 text-white text-xl"
      >
        Make cleaning tasks fun for your children in an interactive way!
      </p>
    </div>

    <Card class="mx-auto w-full md:w-1/3 max-w-sm">
      <template #title> {{ title }}</template>

      <template #content>
        <component :isLoading="isSubmitting" :is="form" @submit="onSubmit">
          <template #error v-if="serverError">
            <p class="p-error mb-5">{{ serverError }}</p>
          </template>
        </component>
      </template>

      <template #footer>
        <router-link class="hover:underline" v-if="isRegistration" to="login"
          >Already have an account?</router-link
        >
        <router-link class="hover:underline" v-else to="register">
          Create a new account</router-link
        >
      </template>
    </Card>
  </div>
</template>

<script>
import LoginForm from '@/components/auth/LoginForm.vue';
import RegistrationForm from '@/components/auth/RegistrationForm.vue';

import background from '@/assets/bg_1.jpeg';
import { mapActions } from 'vuex';
import { LOGIN_USER, REGISTER_USER } from '@/store/user/actions';
import useVuelidation from '@/compositions/useVuelidation';

export default {
  name: 'AuthPage',

  components: { RegistrationForm, LoginForm },

  data() {
    return {
      background,
      serverError: '',
    };
  },

  computed: {
    /**
     * Is the authentication method registration or login.
     */
    isRegistration: ({ $route }) => $route.name == 'register',

    /**
     * Form component used for the authentication page.
     */
    form: ({ isRegistration }) => (isRegistration ? 'RegistrationForm' : 'LoginForm'),

    /**
     * Title used for the authentication page.
     */
    title: ({ isRegistration }) =>
      isRegistration ? 'Register a new user' : 'Login to an existing account',

    /**
     * Auth handler function used for the authentication page.
     */
    authHandler: ({ isRegistration }) => (isRegistration ? REGISTER_USER : LOGIN_USER),
  },

  methods: {
    ...mapActions([LOGIN_USER, REGISTER_USER]),

    async onSubmit(user) {
      this.submitForm(async () => {
        await this[this.authHandler](user);
        this.$router.push({ name: 'dashboard' });
      }, this.handleServerError);
    },

    handleServerError({ response }) {
      switch (response.status) {
        case 403:
          this.serverError = 'Invalid username or password.';
          break;
        case 409:
          this.serverError = 'Username or email is already in use!';
          break;
        default:
          this.serverError = 'Something went wrong...';
      }
    },
  },

  setup: () => ({
    ...useVuelidation(),
  }),
};
</script>

<style lang="postcss" scoped>
.image-wrapper {
  z-index: -9999;
  background-position: top left;
  background-repeat: no-repeat;
}
</style>

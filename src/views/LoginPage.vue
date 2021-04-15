<template>
  <div class="flex items-center w-screen">
    <div
      class="w-3/5 h-screen main-page__wrapper flex justify-center items-center"
      :style="{ backgroundImage: `url(${background})` }"
    >
      <p class="bg-opacity-50 bg-dark p-1 text-white text-lg">
        Make cleaning tasks fun for your children in an interactive way!
      </p>
    </div>

    <Card class="w-2/3 lg:w-1/3 mx-auto">
      <template #title> Login to an existing account </template>

      <template #content>
        <form class="p-fluid" @submit.prevent="createUser">
          <p v-if="error">{{ error }}</p>

          <BaseInput
            id="username"
            v-model="user.username"
            label="Username"
            :error="isSubmitted && !user.username ? 'Username is required' : ''"
          />

          <BaseInput
            :feedback="false"
            id="password"
            label="Password"
            v-model="user.password"
            kind="password"
            :error="isSubmitted && !user.password ? 'Password is required' : ''"
            toggleMask
          />

          <BaseButton :loading="isLoading" label="Login" type="submit" />
        </form>
      </template>

      <template #footer>
        <router-link to="register">Don't have an account yet?</router-link>
      </template>
    </Card>
  </div>
</template>

<script>
import background from '@/assets/bg_1.jpeg';
import useVuelidate from '@vuelidate/core';
import { required } from '@vuelidate/validators';
import { mapActions } from 'vuex';
import { LOGIN_USER } from '@/store/user/actions';

export default {
  data() {
    return {
      isLoading: false,
      background,
      isSubmitted: false,

      user: {
        username: '',
        password: '',
      },
    };
  },

  validations() {
    return {
      user: {
        username: { required },
        password: { required },
      },
    };
  },

  methods: {
    ...mapActions([LOGIN_USER]),

    async createUser() {
      console.log('asdasdasd');
      this.v$.$touch();
      this.isSubmitted = true;
      console.log(this.v$.$error);
      if (this.v$.$error) return;
      try {
        this.isLoading = true;
        await this[LOGIN_USER](this.user);
        this.$router.push({ name: 'tasks' });
      } catch (e) {
        console.log(e);
        this.error = 'Invalid username or password!';
      } finally {
        this.isLoading = false;
      }
    },
  },

  setup() {
    return {
      v$: useVuelidate(),
    };
  },
};
</script>

<style lang="postcss" scoped>
.main-page__wrapper {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>

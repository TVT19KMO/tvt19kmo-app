<template>
  <div class="min-w-screen min-h-screen">
    <TheHeader />
    <main class="absolute top-12 bottom-10 w-full">
      <!-- TODO: User router -->
      <router-view></router-view>
    </main>
    <TheFooter class="fixed bottom-0" />
  </div>
</template>

<script>
import TasksPage from '@/views/TasksPage.vue';
import MainPage from '@/views/MainPage.vue';
import ChildPage from '@/views/ChildPage.vue';
import TheHeader from '@/components/TheHeader.vue';
import TheFooter from '@/components/TheFooter.vue';
import { mapActions, mapGetters } from 'vuex';
import { FETCH_INFO } from './store/user/actions';

export default {
  components: {
    TheHeader,
    TheFooter,
    TasksPage,
    MainPage,
    ChildPage,
  },

  computed: {
    ...mapGetters(['isAuthenticated']),
  },

  methods: {
    ...mapActions([FETCH_INFO]),
  },

  async created() {
    if (this.isAuthenticated) {
      await this[FETCH_INFO]();
    }
  },
};
</script>

<style lang="postcss">
body {
  background-color: #17212f;
}
</style>

<template>
  <PageWrapper title="Manage your settings">

    <SettingsModal
      :child="child"
      @user="onChangePassword"
      v-model:visible="showChildEdit"
    />
  </PageWrapper>
</template>

<script>
import { mapActions } from 'vuex';
import { defineComponent, onMounted } from 'vue-demi';

import { SettingsModal } from '@/components/settings';

import useSettings from '@/compositions/useSettings';
import { SET_PASSWORD } from '@/store/settings/actions';

export default defineComponent({
  components: {
    SettingsModal,
  },

  data: () => ({
    password: null,
  }),

  methods: {
    ...mapActions([CHANGE_PASSWORD]),

    onChangePassword(user) {
      this.setPassword = null;
    },
  },

  setup() {
    const { password , setPassword } = useSettings();

    onMounted(async () => {
      await setPassword();
    });

    return {
      password,
    };
  },
});
</script>

<style></style>

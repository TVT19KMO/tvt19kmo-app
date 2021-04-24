<template>
  <PageWrapper title="Manage your children">
    <ChildList @remove-device="onRemoveDevice" @add="onAddChild" :children="children" />

    <ChildEditModal
      v-if="showChildEdit"
      @close="showChildEdit = false"
      :child="child"
      @save="onSaveChild"
      v-model:visible="showChildEdit"
    />
  </PageWrapper>
</template>

<script>
import { mapActions } from 'vuex';
import { defineComponent, onMounted } from 'vue-demi';

import { ChildEditModal, ChildList } from '@/components/children';

import useChildData from '@/compositions/useChildData';

import { ADD_CHILD, REMOVE_CHILD_DEVICE } from '@/store/children/actions';

export default defineComponent({
  components: {
    ChildEditModal,
    ChildList,
  },

  data: () => ({
    showChildEdit: false,
    child: null,
  }),

  methods: {
    ...mapActions([ADD_CHILD, REMOVE_CHILD_DEVICE]),

    onAddChild() {
      this.child = null;
      this.showChildEdit = true;
    },

    onRemoveDevice(id) {
      this[REMOVE_CHILD_DEVICE](id);
    },

    onSaveChild(child) {
      if (child.id) {
      } else {
        this[ADD_CHILD](child);
      }
    },
  },

  setup() {
    const { children, getChildren } = useChildData();

    onMounted(async () => {
      await getChildren();
    });

    return {
      children,
    };
  },
});
</script>

<style></style>

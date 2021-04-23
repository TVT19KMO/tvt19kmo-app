<template>
  <PageWrapper title="Manage your children">
    <ChildList @add="onAddChild" :children="children" class="w-full lg:w-2/3" />

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
import { ChildEditModal, ChildList } from '@/components/children';
import useChildData from '@/compositions/useChildData';
import { onMounted } from 'vue-demi';
import { ADD_CHILD } from '@/store/children/actions';
import { mapActions } from 'vuex';

export default {
  components: {
    ChildEditModal,
    ChildList,
  },

  data: () => ({
    showChildEdit: false,
    child: null,
  }),

  methods: {
    ...mapActions([ADD_CHILD]),

    onAddChild() {
      this.child = null;
      this.showChildEdit = true;
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
};
</script>

<style></style>

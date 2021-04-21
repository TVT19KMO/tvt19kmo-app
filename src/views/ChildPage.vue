<template>
  <div class="container mx-auto w-screen">
    <h2 class="text-xl text-white my-5">Manage your childen</h2>
    <div class="my-10 flex items-start space-x-5">
      <ChildList class="w-full lg:w-2/3" />
      <ChildForm />
    </div>
  </div>
</template>

<script>
import ChildForm from '@/components/children/ChildForm.vue';
import ChildList from '@/components/children/ChildList.vue';

export default {
  components: {
    ChildForm,
    ChildList,
  },
};
</script>

<style></style>

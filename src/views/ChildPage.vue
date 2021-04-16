<template>
  <Heading type="h2">Children</Heading>
  <div class="my-10 flex items-start space-x-5">
    <ChildList class="w-full lg:w-2/3" />
    <AddChild class="hidden lg:inline-block lg:w-1/3" />
  </div>
</template>

<script>
import AddChild from '@/components/children/ChildForm.vue';
import ChildList from '@/components/children/ChildList.vue';

export default {
  components: {
    AddChild,
    ChildList,
  },
};
</script>

<style></style>

<template>
  <tr>
    <th scope="row">
      {{ name }}
    </th>
    <td>{{ noteToShow }}</td>
    <td>{{ points }}</td>
    <td>{{ room }}</td>
    <td class="flex">
      <BaseButton>Edit</BaseButton>
      <BaseButton @click="$emit('delete', id)">Delete</BaseButton>
    </td>
  </tr>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    note: {
      type: String,
      required: true,
    },
    points: {
      type: Number,
      required: true,
    },
    room: {
      type: String,
      required: true,
    },
  },

  emits: ['delete'],

  computed: {
    noteToShow() {
      return this.note.length > 50 ? `${this.note.slice(0, 50)}...` : this.note;
    },
  },
};
</script>

<style></style>

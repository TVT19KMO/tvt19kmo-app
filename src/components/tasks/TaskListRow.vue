<template>
  <tr>
    <th scope="row">{{ name }}</th>
    <td>{{ noteToShow }}</td>
    <td>{{ points }}</td>
    <td>{{ room }}</td>
    <td class="flex">
      <BaseButton>Edit</BaseButton>
      <BaseButton>Delete</BaseButton>
    </td>
  </tr>
</template>

<script>
export default {
  props: {
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
  computed: {
    noteToShow() {
      return this.note.length > 50 ? `${this.note.slice(0, 50)}...` : this.note;
    },
  },
};
</script>

<style></style>

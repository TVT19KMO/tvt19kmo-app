<template>
  <tr>
    <th scope="row">{{ name }}</th>
    <td>{{ note }}</td>
    <td>{{ points }}</td>
    <td>{{ room }}</td>
    <td>
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
};
</script>

<style></style>

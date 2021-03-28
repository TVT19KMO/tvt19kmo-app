<template>
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Note</th>
        <th>Points</th>
        <th>Room</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="task in tasks" :key="task.name">
        <td>{{ task.name }}</td>
        <td>{{ task.note }}</td>
        <td>{{ task.points }}</td>
        <td>{{ task.room }}</td>
        <td><BaseButton>Edit</BaseButton><BaseButton>Delete</BaseButton></td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import faker from 'faker';

export default {
  data() {
    return {
      tasks: Array.from({ length: 10 }).map((_) => ({
        name: faker.lorem.words(2),
        note: faker.lorem.sentence(),
        points: faker.datatype.number(20),
        room: faker.lorem.word(),
      })),
    };
  },
};
</script>

<style></style>

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
      <TaskListRow v-for="task in tasks" v-bind="task" :key="task.name" />
    </tbody>
  </table>
</template>

<script>
import faker from 'faker';

import TaskListRow from './TaskListRow.vue';

export default {
  components: { TaskListRow },

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

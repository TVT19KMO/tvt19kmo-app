<template>
  <BaseTable>
    <template #head>
      <th scope="col">Name</th>
      <th scope="col">Note</th>
      <th scope="col">Points</th>
      <th scope="col">Room</th>
    </template>
    <template #default>
      <TaskListRow v-for="task in tasks" v-bind="task" :key="task.name" />
    </template>
  </BaseTable>
</template>

<script>
import faker from 'faker';
import TaskListRow from './TaskListRow.vue';

export default {
  components: { TaskListRow },
  data() {
    return {
      tasks: Array.from({ length: 10 }).map((_) => ({
        name: faker.random.arrayElement([
          'Empty trash',
          'Dust windowsills',
          'Dust baseboards',
          'Sort out-of-place items',
          'Make beds',
          'Carry laundry',
          'Carry laundry',
        ]),
        note: faker.lorem.sentence(),
        points: faker.datatype.number(20),
        room: faker.random.arrayElement(['kitchen', 'living room', 'restroom']),
      })),
    };
  },
};
</script>

<style></style>

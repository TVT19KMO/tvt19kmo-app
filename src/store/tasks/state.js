export const emptyTask = {
  name: '',
  note: '',
  room: null,
  difficulty: null,
};

export const state = () => ({
  tasks: [],
  taskDifficulties: [],
  taskRooms: [],
  selectedTask: emptyTask,
});

export default state;

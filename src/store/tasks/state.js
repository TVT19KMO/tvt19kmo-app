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
  assignedTasks: [],
  selectedTask: emptyTask,
});

export default state;

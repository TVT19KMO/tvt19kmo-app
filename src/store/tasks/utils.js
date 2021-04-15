export const serializeTask = (task) => {
  return {
    ...task,
    room: task.room.id,
    difficulty: task.difficulty.id,
  };
};

export default {
  serializeTask,
};

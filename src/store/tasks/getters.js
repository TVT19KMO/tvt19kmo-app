import { findById } from '@/utils';
import moment from 'moment';

export const ASSIGNED_TASKS = 'ASSIGNED_TASKS';

export const filledAssignedTasks = ({ assignedTasks, taskDifficulties, taskRooms }) =>
  assignedTasks.map(
    ({ task: { room, difficulty, ...taskProps }, assigned, finished, ...other }) => ({
      ...other,
      finished: finished ? moment(finished).format('LLL') : null,
      assigned: moment(assigned).format('LLL'),
      task: {
        room: findById(taskRooms, room),
        difficulty: findById(taskDifficulties, difficulty),
        ...taskProps,
      },
    }),
  );

export const getterTypes = {
  ASSIGNED_TASKS,
};

export const getters = {
  ASSIGNED_TASKS: filledAssignedTasks,
};

export default getters;

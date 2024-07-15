import { createAction, props } from '@ngrx/store';
import { Task } from '../../services/backend.service';

const source = `[TASK]`

export const TasksStartLoading = createAction(
  `${source} Tasks start loading`
);

export const TasksLoadedSuccess = createAction(
  `${source} Tasks loaded successfully`,
  props<{ tasks: Task[] }>()
);

export const TasksLoadedFailed = createAction(
  `${source} Tasks loading failed`,
  props<{ error: Error }>()
);

export const TaskStartLoading = createAction(
  `${source} Task start loading`,
  props<{ taskId: number }>()
);

export const TaskLoadedSuccess = createAction(
  `${source} Task loaded successfully`,
  props<{ task: Task }>()
);

export const TaskLoadedFailed = createAction(
  `${source} Task loading failed`,
  props<{ error: Error }>()
);

export const TaskStartCreating = createAction(
  `${source} Tasks start creating`,
  props<{ description: string }>()
);

export const TaskStartCreatedSuccess = createAction(
  `${source} Tasks created successfully`,
  props<{ task: Task }>()
);

export const TaskStartCreatedFailed = createAction(
  `${source} Tasks created failed`,
  props<{ error: Error }>()
);

export const TasksStartAssigning = createAction(
  `${source} Tasks start assigning`,
  props<{ taskId: number, userId: number }>()
);

export const TasksAssignedSuccess = createAction(
  `${source} Tasks assigned successfully`,
  props<{ task: Task }>()
);

export const TasksAssignedFailed = createAction(
  `${source} Tasks assigned failed`,
  props<{ error: Error }>()
);

export const TasksStartCompleting = createAction(
  `${source} Tasks start completing`,
  props<{ taskId: number, completed: boolean }>()
);

export const TasksCompletedSuccess = createAction(
  `${source} Tasks completed successfully`,
  props<{ task: Task }>()
);

export const TasksCompletedFailed = createAction(
  `${source} Tasks completed failed`,
  props<{ error: Error }>()
);

export const TasksSearch = createAction(
  `${source} Tasks search`,
  props<{ value: string }>()
);

import { createFeatureSelector, createSelector } from "@ngrx/store";
import { TASK_FEATURE_KEY, TaskState } from "./task.reducers";
import { Task } from "../../services/backend.service";

export const selectTaskState = createFeatureSelector<TaskState>(TASK_FEATURE_KEY);

export const selectTasks = createSelector(
  selectTaskState,
  (taskState): Task[] => taskState.tasks
);

export const selectTasksLoading = createSelector(
  selectTaskState,
  (taskState): boolean => taskState.loading
);

export const selectSelectedTask = createSelector(
  selectTaskState,
  (taskState): Task => taskState.selectedTask
);

export const selectSearchedValue = createSelector(
  selectTaskState,
  (taskState): string => taskState.searchedValue
);
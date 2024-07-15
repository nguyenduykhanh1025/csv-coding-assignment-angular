import { ActionReducer, createReducer, on } from '@ngrx/store';
import { TaskLoadedFailed, TaskLoadedSuccess, TasksAssignedFailed, TasksAssignedSuccess, TasksCompletedFailed, TasksCompletedSuccess, TasksLoadedFailed, TasksLoadedSuccess, TasksSearch, TasksStartAssigning, TasksStartCompleting, TasksStartLoading, TaskStartCreatedFailed, TaskStartCreatedSuccess, TaskStartCreating, TaskStartLoading } from './task.actions';
import { Task } from '../../services/backend.service';

export const TASK_FEATURE_KEY = 'TASK';

export interface TaskState {
  tasks: Task[],
  selectedTask: Task,
  loading: boolean,
  searchedValue: string
}

export const initialState: TaskState = {
  tasks: [],
  selectedTask: undefined,
  loading: false,
  searchedValue: ''
};

export const taskReducers: ActionReducer<TaskState> = createReducer(
  initialState,
  on(TasksStartLoading, (state: TaskState): TaskState => {
    return {
      ...state,
      loading: true,
    };
  }),
  on(TasksLoadedSuccess, (state: TaskState, action): TaskState => {
    return {
      ...state,
      loading: false,
      tasks: action.tasks
    };
  }),
  on(TasksLoadedFailed, (state: TaskState): TaskState => {
    return {
      ...state,
      loading: false,
    };
  }),
  on(TaskStartLoading, (state: TaskState): TaskState => {
    return {
      ...state,
      loading: true,
    };
  }),
  on(TaskLoadedSuccess, (state: TaskState, action): TaskState => {
    return {
      ...state,
      loading: false,
      selectedTask: action.task
    };
  }),
  on(TaskLoadedFailed, (state: TaskState): TaskState => {
    return {
      ...state,
      loading: false,
    };
  }),
  on(TaskStartCreating, (state: TaskState): TaskState => {
    return {
      ...state,
      loading: true,
    };
  }),
  on(TaskStartCreatedSuccess, (state: TaskState, action): TaskState => {
    return {
      ...state,
      loading: false,
      tasks: [
        ...state.tasks,
        action.task
      ]
    };
  }),
  on(TaskStartCreatedFailed, (state: TaskState): TaskState => {
    return {
      ...state,
      loading: false,
    };
  }),
  on(TasksStartAssigning, (state: TaskState): TaskState => {
    return {
      ...state,
      loading: true,
    };
  }),
  on(TasksAssignedSuccess, (state: TaskState, action): TaskState => {
    return {
      ...state,
      selectedTask: action.task,
      loading: false,
    };
  }),
  on(TasksAssignedFailed, (state: TaskState): TaskState => {
    return {
      ...state,
      loading: false,
    };
  }),
  on(TasksStartCompleting, (state: TaskState): TaskState => {
    return {
      ...state,
      loading: true
    };
  }),
  on(TasksCompletedSuccess, (state: TaskState, action): TaskState => {
    return {
      ...state,
      selectedTask: action.task,
      loading: false
    };
  }),
  on(TasksCompletedFailed, (state: TaskState): TaskState => {
    return {
      ...state,
      loading: false
    };
  }),
  on(TasksSearch, (state: TaskState, action): TaskState => {
    return {
      ...state,
      searchedValue: action.value
    };
  }),
);

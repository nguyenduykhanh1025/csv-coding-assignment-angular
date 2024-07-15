import { mockTasks } from "src/app/utility/mocks/mock-task";
import { initialState, taskReducers } from "./task.reducers";
import { TasksLoadedFailed, TasksLoadedSuccess, TasksStartLoading } from "./task.actions";

const defaultState = {
  ...initialState,
  tasks: []
};


describe(taskReducers.name, () => {
  describe('unknown action', () => {
    it('should return the default state', () => {
      const action = {
        type: 'Unknown',
      };
      const state = taskReducers(defaultState, action);

      expect(state).toBe(defaultState);
    });
  });

  describe('TasksStartLoading', () => {
    it('should return { loading:true }', () => {
      const action = TasksStartLoading();
      const state = taskReducers(initialState, action);

      expect(state.loading).toEqual(true);
    });
  });

  describe('TasksLoadedSuccess', () => {
    it('should return { loading:false } and loaded tasks', () => {
      const action = TasksLoadedSuccess({ tasks: mockTasks() });
      const state = taskReducers(initialState, action);

      expect(state.loading).toEqual(false);
      expect(state.tasks).toEqual(mockTasks());
    });
  });

  describe('TasksLoadedFailed', () => {
    it('should return { loading:false }', () => {
      const action = TasksLoadedFailed({ error: new Error('some errors') });
      const state = taskReducers(initialState, action);

      expect(state.loading).toEqual(false);
    });
  });
})
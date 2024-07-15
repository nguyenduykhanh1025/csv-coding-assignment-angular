import { mockTasks } from "src/app/utility/mocks/mock-task";
import { selectTasks, selectTasksLoading } from "./task.selectors";
import { initialState } from "./task.reducers";

const defaultState = {
  ...initialState,
  tasks: mockTasks()
};

describe('Task selectors', () => {
  it('selectTasks', () => {
    const selected = selectTasks.projector(defaultState);

    expect(selected.length).toBe(2);
    expect(selected).toBe(defaultState.tasks);
  });

  it('selectTasksLoading', () => {
    const selected = selectTasksLoading.projector(defaultState);

    expect(selected).toBe(false);
  });
})
import { TasksStartLoading } from "./task.actions";

describe('TasksStartLoading', () => {
  it('should return an action', () => {
    expect(TasksStartLoading().type)
      .toBe('[TASK] Tasks start loading');
  });
});

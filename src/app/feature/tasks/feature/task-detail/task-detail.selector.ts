import { createSelector } from "@ngrx/store";
import { selectSelectedTask, selectTasksLoading } from "src/app/data-access/store/task/task.selectors";
import { selectUsers, selectUsersLoading } from "src/app/data-access/store/user/user.selectors";
import { TaskAndAssigneeInfo } from "src/app/utility/models/task-and-assignee-info.model";

export const selectTaskDetail = createSelector(
  selectSelectedTask,
  selectUsers,
  (task, users): TaskAndAssigneeInfo => {
    if (!task) {
      return;
    }
    
    return {
      ...task,
      assigneeName: users.find(user => user.id === +task.assigneeId)?.name
    }
  }
);

export const selectTaskDetailLoading = createSelector(
  selectTasksLoading,
  selectUsersLoading,
  (isTasksLoading, isUsersLoading): boolean => {
    return isTasksLoading || isUsersLoading
  }
);
import { createSelector } from "@ngrx/store";
import { selectSearchedValue, selectTasks, selectTasksLoading } from "src/app/data-access/store/task/task.selectors";
import { selectUsers, selectUsersLoading } from "src/app/data-access/store/user/user.selectors";
import { TaskAndAssigneeInfo } from "src/app/utility/models/task-and-assignee-info.model";

export const selectTaskAndAssigneeInfo = createSelector(
  selectTasks,
  selectUsers,
  selectSearchedValue,
  (tasks, users, searchedValue): TaskAndAssigneeInfo[] => {
    const filteredTasks = tasks.filter(task => {
      // It's only a simple search
      return task.description.toLocaleLowerCase().includes(searchedValue.toLocaleLowerCase())
    })
    
    return filteredTasks.map(task => {
      return {
        ...task,
        assigneeName: users.find(user => user.id === +task.assigneeId)?.name
      };
    })
  }
);

export const selectTaskListLoading = createSelector(
  selectTasksLoading,
  selectUsersLoading,
  (isTasksLoading, isUsersLoading): boolean => {
    return isTasksLoading || isUsersLoading
  }
);
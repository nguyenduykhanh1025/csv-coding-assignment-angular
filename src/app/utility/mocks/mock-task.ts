import { Task } from "src/app/data-access/services/backend.service";
import { TaskAndAssigneeInfo } from "../models/task-and-assignee-info.model";

export function mockTasks(): Task[] {
  return [
    {
      id: 0,
      description: "Install a monitor arm",
      assigneeId: 111,
      completed: false
    },
    {
      id: 1,
      description: "Move the desk to the new location",
      assigneeId: 111,
      completed: false
    }
  ]
}

export function mockTasksAndAssigneeInfo(): TaskAndAssigneeInfo[] {
  return mockTasks().map(task => {
    return {
      ...task,
      assigneeName: 'mockedAssigneeName'
    }
  })
}
import { Task } from "src/app/data-access/services/backend.service";

export type TaskAndAssigneeInfo = Task & { assigneeName: string }
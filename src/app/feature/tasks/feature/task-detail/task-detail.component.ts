import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Store } from "@ngrx/store";
import { TasksStartAssigning, TasksStartCompleting, TaskStartLoading } from "src/app/data-access/store/task/task.actions";
import { UsersStartLoading } from "src/app/data-access/store/user/user.actions";
import { selectTaskDetail, selectTaskDetailLoading } from "./task-detail.selector";
import { selectUsers } from "src/app/data-access/store/user/user.selectors";

@Component({
  selector: "app-task-detail",
  templateUrl: './task-detail.component.html',
  styleUrls: ["./task-detail.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskDetailComponent implements OnInit {
  private _taskID = +this._route.snapshot.paramMap.get('id');

  selectedTask$ = this._store.select(selectTaskDetail)
  selectedUsers$ = this._store.select(selectUsers)
  selectedTasksLoading$ = this._store.select(selectTaskDetailLoading)

  constructor(private readonly _store: Store, private readonly _route: ActivatedRoute) { }

  ngOnInit(): void {
    this._store.dispatch(TaskStartLoading({ taskId: this._taskID }))
    this._store.dispatch(UsersStartLoading())
  }

  onAssignTask(userId: number) {
    if (!userId) {
      return
    }

    this._store.dispatch(TasksStartAssigning({ taskId: this._taskID, userId }))
  }

  onCompleteTask(completed: boolean) {
    this._store.dispatch(TasksStartCompleting({ taskId: this._taskID, completed }))
  }
}

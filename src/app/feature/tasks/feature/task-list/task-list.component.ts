import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";
import { TaskStartCreating, TasksSearch, TasksStartLoading } from "src/app/data-access/store/task/task.actions";
import { UsersStartLoading } from "src/app/data-access/store/user/user.actions";
import { selectTaskAndAssigneeInfo, selectTaskListLoading } from "./task-list.selectors";
import { selectSearchedValue } from "src/app/data-access/store/task/task.selectors";

@Component({
  selector: "app-task-list",
  templateUrl: "./task-list.component.html",
  styleUrls: ["./task-list.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskListComponent implements OnInit {
  selectedTasks$ = this._store.select(selectTaskAndAssigneeInfo);
  selectedTasksLoading$ = this._store.select(selectTaskListLoading);
  selectedSearchedValue$ = this._store.select(selectSearchedValue);

  createNewTaskForm = new FormGroup({
    description: new FormControl('', [Validators.required]),
  })

  constructor(private readonly _store: Store) { }

  ngOnInit(): void {
    this._store.dispatch(TasksStartLoading())
    this._store.dispatch(UsersStartLoading())
  }

  onSubmitCreatingTask() {
    this.createNewTaskForm.markAsTouched();
    if (this.createNewTaskForm.invalid) {
      return;
    }

    this._store.dispatch(TaskStartCreating({
      description: this.createNewTaskForm.value.description
    }))
    this.createNewTaskForm.reset()
  }

  handleSearch(value: string) {
    this._store.dispatch(TasksSearch({ value }))
  }
}

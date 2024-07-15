import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TaskListComponent } from "./feature/task-list/task-list.component";
import { TaskDetailComponent } from "./feature/task-detail/task-detail.component";

const routes: Routes = [
  {
    path: "",
    component: TaskListComponent,
  },
  {
    path: ":id",
    component: TaskDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TaskRoutingModule {}

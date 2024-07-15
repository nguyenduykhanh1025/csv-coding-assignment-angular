import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { TaskListComponent } from "./feature/task-list/task-list.component";
import { TaskDetailComponent } from "./feature/task-detail/task-detail.component";
import { TaskRoutingModule } from "./task-routing.module";
import { TaskDetailFieldComponent } from "./feature/task-detail/ui/task-detail-field/task-detail-field.component";
import { LinkModule } from "src/app/ui/link/link.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [TaskListComponent, TaskDetailComponent, TaskDetailFieldComponent],
  imports: [CommonModule, TaskRoutingModule, LinkModule, ReactiveFormsModule, FormsModule],
})
export class TaskModule { }

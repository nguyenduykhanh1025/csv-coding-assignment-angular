import { NgModule, OnInit } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    redirectTo: "tasks",
    pathMatch: "full",
  },
  {
    path: "tasks",
    loadChildren: (): Promise<any> =>
      import("./feature/tasks/task-routing.module").then(
        (m) => m.TaskRoutingModule
      ),
  },
  {
    path: "**",
    loadChildren: (): Promise<any> =>
      import("./feature/page-not-found/page-not-found-routing.module").then(
        (m) => m.PageNotFoundRoutingModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

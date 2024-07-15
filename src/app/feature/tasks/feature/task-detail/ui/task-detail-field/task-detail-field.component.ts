import { ChangeDetectionStrategy, Component, Input } from "@angular/core";

@Component({
  selector: "app-task-detail-field",
  templateUrl: './task-detail-field.component.html',
  styleUrls: ["./task-detail-field.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskDetailFieldComponent {
  @Input() key: string;
}

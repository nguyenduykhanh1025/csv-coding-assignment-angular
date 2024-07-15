import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "app-link",
  templateUrl: './link.component.html',
  styleUrls: ["./link.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class LinkComponent {
  @Input() routerLink: string;
}

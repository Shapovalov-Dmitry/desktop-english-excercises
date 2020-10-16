import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  EventEmitter,
  Output,
  Input,
} from "@angular/core";

@Component({
  selector: "app-stepper",
  templateUrl: "./stepper.component.html",
  styleUrls: ["./stepper.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StepperComponent implements OnInit {
  @Input() isGoBackAvailable: boolean;
  @Input() isGoForwardAvailable: boolean;

  @Output() goBack = new EventEmitter();
  @Output() goForward = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  public goBackHandler(): void {
    this.goBack.emit();
  }
  public goForwardHandler(): void {
    this.goForward.emit();
  }
}

import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from "@angular/core";
import { IFileConfig } from "app/core/services";

interface IPlurals {
  word: string;
  wordPlural: string;
  suffix: string;
  image: string;
  imagePlural: string;

  _wordWithoutSuffix: string;
}

@Component({
  selector: "app-exercise-plurals",
  templateUrl: "./exercise-plurals.component.html",
  styleUrls: ["./exercise-plurals.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExercisePluralsComponent implements OnInit {
  @Input() data: IFileConfig<IPlurals[]>;

  public currentIdx = 0;

  constructor() {}

  ngOnInit(): void {
    const { content } = this.data;
    content.forEach(
      (el) => (el._wordWithoutSuffix = el.wordPlural.replace(el.suffix, ""))
    );
  }

  public goNextHandler(): void {
    this.currentIdx++;
  }

  public goPrevHandler(): void {
    this.currentIdx--;
  }
}

import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from "@angular/core";
import { IFileConfig } from "app/core/services";

export interface IChooseInsertConfig {
  phrase: string;
  answer: string;
  options: string[];

  _partBeforeInsert: string;
  _partAfterInsert: string;
}

@Component({
  selector: "app-choose-insert-generic-exercise",
  templateUrl: "./choose-insert-generic-exercise.component.html",
  styleUrls: ["./choose-insert-generic-exercise.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChooseInsertGenericExerciseComponent implements OnInit {
  @Input() data: IFileConfig<IChooseInsertConfig[]>;

  public currentIdx = 0;
  public submittedAnswers: IChooseInsertConfig["options"] = [];
  constructor() {}

  ngOnInit(): void {
    const { content } = this.data;
    content.forEach(
      (el) =>
        ([el._partBeforeInsert, el._partAfterInsert] = el.phrase.split("_"))
    );
  }

  public submit(option: string): void {
    this.submittedAnswers.push(option);
  }

  public getStatusClass(option: string): "correct" | "wrong" | "" {
    if (!this.submittedAnswers.includes(option)) {
      return "";
    } else {
      return option === this.data.content[this.currentIdx].answer
        ? "correct"
        : "wrong";
    }
  }

  public goNextHandler(): void {
    this.currentIdx++;
    this.clearState();
  }

  public goPrevHandler(): void {
    this.currentIdx--;
    this.clearState();
  }

  private clearState(): void {
    this.submittedAnswers = [];
  }
}

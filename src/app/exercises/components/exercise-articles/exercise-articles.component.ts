import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from "@angular/core";
import { IFileConfig } from "app/core/services";

interface IArticle {
  phrase: string;
  answer: string;

  _partBeforeInsert: string;
  _partAfterInsert: string;
}

enum AnswersEnum {
  "a" = "a",
  "an" = "an",
  "empty" = " ",
}

@Component({
  selector: "app-exercise-articles",
  templateUrl: "./exercise-articles.component.html",
  styleUrls: ["./exercise-articles.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExerciseArticlesComponent implements OnInit {
  @Input() data: IFileConfig<IArticle[]>;

  public currentIdx = 0;
  public submittedAnswers: AnswersEnum[] = [];
  public AnswersEnum = AnswersEnum;
  constructor() {}

  ngOnInit(): void {
    const { content } = this.data;
    content.forEach(
      (el) =>
        ([el._partBeforeInsert, el._partAfterInsert] = el.phrase.split("_"))
    );
  }

  public submit(answer: AnswersEnum): void {
    this.submittedAnswers.push(answer);
  }

  public getStatusClass(option: AnswersEnum): "correct" | "wrong" | "" {
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

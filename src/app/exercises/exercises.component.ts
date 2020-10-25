import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { FsService, IFileConfig } from "app/core/services";

@Component({
  selector: "app-exercises",
  templateUrl: "./exercises.component.html",
  styleUrls: ["./exercises.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExercisesComponent implements OnInit {
  public files: IFileConfig[];

  constructor(private fsService: FsService) {}

  ngOnInit(): void {
    const fileNumRegex = new RegExp(/\d. /);

    this.files = this.fsService
      .getDataFromFileSystem()
      .map((f) => ({
        ...f,
        filename: f.filename.replace(fileNumRegex, ""),
        fileNum: parseInt((fileNumRegex.exec(f.filename) || ["0"])[0]),
      }))
      .sort((f1, f2) => f1.fileNum - f2.fileNum);
  }
}

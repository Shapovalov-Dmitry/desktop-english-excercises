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
    this.files = this.fsService.getDataFromFileSystem();
  }
}

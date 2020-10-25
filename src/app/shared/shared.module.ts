import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { TranslateModule } from "@ngx-translate/core";

import { PageNotFoundComponent } from "./components/";
import { WebviewDirective } from "./directives/";
import { FormsModule } from "@angular/forms";
import { StepperComponent } from "./components/stepper/stepper.component";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { ChooseInsertGenericExerciseComponent } from './components/choose-insert-generic-exercise/choose-insert-generic-exercise.component';

@NgModule({
  declarations: [PageNotFoundComponent, WebviewDirective, StepperComponent, ChooseInsertGenericExerciseComponent],
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
  ],
  exports: [TranslateModule, WebviewDirective, FormsModule, StepperComponent, ChooseInsertGenericExerciseComponent],
})
export class SharedModule {}

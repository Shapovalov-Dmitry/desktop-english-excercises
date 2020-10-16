import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { TranslateModule } from "@ngx-translate/core";

import { PageNotFoundComponent } from "./components/";
import { WebviewDirective } from "./directives/";
import { FormsModule } from "@angular/forms";
import { StepperComponent } from "./components/stepper/stepper.component";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
  declarations: [PageNotFoundComponent, WebviewDirective, StepperComponent],
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
  ],
  exports: [TranslateModule, WebviewDirective, FormsModule, StepperComponent],
})
export class SharedModule {}

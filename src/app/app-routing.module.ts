import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PageNotFoundComponent } from "./shared/components";

import { HomeRoutingModule } from "./home/home-routing.module";
import { ExercisesModule } from "./exercises/exercises.module";

const routes: Routes = [
  {
    path: "",
    redirectTo: "exercise",
    pathMatch: "full",
  },
  {
    path: "**",
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HomeRoutingModule, ExercisesModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}

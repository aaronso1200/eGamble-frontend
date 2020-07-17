import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GambleListComponent} from "./gamble-list/gamble-list.component";

const routes: Routes = [
  { path: '', component: GambleListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

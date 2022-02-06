import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UniversPageComponent} from "./Pages/univers-page/univers-page.component";
import {UniversShowComponent} from "./Pages/univers-show/univers-show.component";
import {EditUniversComponent} from "./Pages/edit-univers/edit-univers.component";
import {PersonnagesPageComponent} from "./Pages/personnages-page/personnages-page.component";

const routes: Routes = [
  { path: '', redirectTo: 'personnage', pathMatch: 'full'},
  { path: 'univers', component: UniversPageComponent },
  { path: 'personnage', component: PersonnagesPageComponent },
  { path: 'univers/:id', component: UniversShowComponent, pathMatch: 'full' },
  { path: 'univers/:id/edit', component: EditUniversComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

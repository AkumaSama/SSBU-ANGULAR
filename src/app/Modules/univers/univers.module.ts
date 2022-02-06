import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UniversCardComponent} from "../../Component/univers-card/univers-card.component";
import {EditUniversComponent} from "../../Pages/edit-univers/edit-univers.component";
import {UniversPageComponent} from "../../Pages/univers-page/univers-page.component";
import {UniversShowComponent} from "../../Pages/univers-show/univers-show.component";
import {DeleteUniversComponent} from "../../Pages/delete-univers/delete-univers.component";
import {UniversCreationComponent} from "../../Pages/univers-creation/univers-creation.component";
import {PersonnageModule} from "../personnage/personnage.module";
import {AppRoutingModule} from "../../app-routing.module";
import {ReactiveFormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {HttpClientModule} from "@angular/common/http";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";



@NgModule({
  declarations: [
    UniversCardComponent,
    EditUniversComponent,
    UniversPageComponent,
    UniversShowComponent,
    DeleteUniversComponent,
    UniversCreationComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    PersonnageModule,
  ]
})
export class UniversModule { }

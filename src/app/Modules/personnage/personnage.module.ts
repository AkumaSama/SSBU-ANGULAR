import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PersonnageCardComponent} from "../../Component/personnage-card/personnage-card.component";
import {PersonnagesPageComponent} from "../../Pages/personnages-page/personnages-page.component";
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "../../app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";



@NgModule({
  declarations: [
    PersonnageCardComponent,
    PersonnagesPageComponent
  ],
  exports: [
    PersonnageCardComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
  ]
})
export class PersonnageModule { }

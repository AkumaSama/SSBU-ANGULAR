import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {UniversModule} from "./Modules/univers/univers.module";
import {CommonModule} from "@angular/common";
import { BrowserModule } from '@angular/platform-browser';
import {PersonnageModule} from "./Modules/personnage/personnage.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UniversModule,
    PersonnageModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

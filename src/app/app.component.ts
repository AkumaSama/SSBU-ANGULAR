import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import Univers from "src/app/Type/Univers"
import { UniversService } from "src/app/Services/univers.service"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'angular-demo';

  constructor(){}
}

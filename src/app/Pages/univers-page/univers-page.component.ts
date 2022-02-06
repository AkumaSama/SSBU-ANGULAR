import { Component, OnInit } from '@angular/core';
import {UniversService} from "../../Services/univers.service";
import Univers from "../../Type/Univers";

@Component({
  selector: 'app-univers-page',
  templateUrl: './univers-page.component.html',
  styleUrls: ['./univers-page.component.css']
})
export class UniversPageComponent implements OnInit {

  univers: Univers[] = [];

  constructor(private universService: UniversService) {}

  ngOnInit(): void {
    this.universService.getUnivers().subscribe((univers) => {
      this.univers = univers
    })
  }

}

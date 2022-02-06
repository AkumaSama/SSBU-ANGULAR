import { Component, OnInit, Input } from '@angular/core';
import Univers from "../../Type/Univers";

@Component({
  selector: 'univers-card',
  templateUrl: './univers-card.component.html',
  styleUrls: ['./univers-card.component.css']
})
export class UniversCardComponent implements OnInit {

  @Input() univer: Univers | null = null

  constructor() { }

  ngOnInit(): void {
  }

}

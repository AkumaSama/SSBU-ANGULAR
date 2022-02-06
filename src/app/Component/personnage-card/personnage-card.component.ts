import {Component, Input, Output, OnInit, EventEmitter} from '@angular/core';
import Personnage from "../../Type/Personnage";

@Component({
  selector: 'personnage-card',
  templateUrl: './personnage-card.component.html',
  styleUrls: ['./personnage-card.component.css']
})
export class PersonnageCardComponent implements OnInit {

  @Input() personnage: Personnage | null = null

  // Pattern Observer => EvenEmitter => Sujet
  @Output() onclickEmitter = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.onclickEmitter.emit(this.personnage?.id)
  }


}

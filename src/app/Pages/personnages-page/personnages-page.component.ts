import { Component, OnInit } from '@angular/core';
import {PersonnageService} from "../../Services/personnage.service";
import Personnage from "../../Type/Personnage";

@Component({
  selector: 'app-personnages-page',
  templateUrl: './personnages-page.component.html',
  styleUrls: ['./personnages-page.component.css']
})
export class PersonnagesPageComponent implements OnInit {

  personnages: Personnage[] = []

  constructor(
    private personnageService: PersonnageService
  ) { }

  ngOnInit(): void {
    this.personnageService.getPersonnages().subscribe((response) => {
      this.personnages = response
    })
  }

  personnageShowPage(idPersonnage: string){
    console.log(idPersonnage)
  }

}

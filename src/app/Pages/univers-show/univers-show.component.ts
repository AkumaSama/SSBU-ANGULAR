import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import Univers from "../../Type/Univers";
import {UniversService} from "../../Services/univers.service";
import {Subscription} from "rxjs";
import {PersonnageService} from "../../Services/personnage.service";
import Personnage from "../../Type/Personnage";

@Component({
  selector: 'app-univers-show',
  templateUrl: './univers-show.component.html',
  styleUrls: ['./univers-show.component.css']
})
export class UniversShowComponent implements OnInit, OnDestroy {

  univers: Univers | null = null
  personnages: Personnage[] = []
  private querySubscription: Subscription | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private universService: UniversService,
    private personnageService: PersonnageService
  ) { }

  ngOnInit(): void {
    /**
     * /something/:id     => :id parametres ( paramas )
     * /something?id="id" => queryParamas / Criterias
     */
    this.querySubscription = this.activatedRoute.params.subscribe(params => {

      const meetingId = params["id"] as string;

      this.universService.getUniver(meetingId).subscribe((response) => {

        this.univers = response

        this.univers.personnages.forEach((personnage) => {

          this.personnageService.getPersonnage(personnage.id).subscribe((response)=> {

            this.personnages.push(response)

          })
        })

      })

    });

  }

  ngOnDestroy() {
    // destruction de l'observer pour eviter une fuite mémoire
    // if(this.querySubscription != undefined) => this.querySubscription?
    this.querySubscription?.unsubscribe()
  }
}

import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import Univers, {UniversModification} from "../../Type/Univers";
import {UniversService} from "../../Services/univers.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-edit-univers',
  templateUrl: './edit-univers.component.html',
  styleUrls: ['./edit-univers.component.css']
})
export class EditUniversComponent implements OnInit, OnDestroy {

  universForm = new FormGroup({
    'nom': new FormControl('', [
      Validators.required,
      Validators.maxLength(255),
      Validators.min(1)
    ]),
    'linkImage': new FormControl('', [
      Validators.required,
      Validators.maxLength(255),
      Validators.min(1)
    ]),
  })

  univers: Univers | null = null

  private querySubscription: Subscription | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private universService: UniversService
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

        this.universForm.patchValue({
          'nom' : this.univers.nom,
          'linkImage' : this.univers.linkImage
        })

      })

    });
  }


  ngOnDestroy() {
    this.querySubscription?.unsubscribe()
  }

  onSubmit(){
    if(this.universForm.valid){

      const data = this.universForm.value as UniversModification
      const id = this.univers?.id

      if(id != undefined)
        this.universService.modifyUnivers(id, data).subscribe((univers) => {
          this.backUnivers()
        })
    }
  }


  backUnivers() {
    const link = ["/univers"]
    this.router.navigate(link)

    /* Si vous avez besoin de paramètres
    let options: NavigationExtras = {}
    options.queryParams = {
      id: id,
    }
    this.router.navigate(link, options)
    */
  }

}

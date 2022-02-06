import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import Personnage from "../Type/Personnage";

@Injectable({
  providedIn: 'root'
})
export class PersonnageService {

  private readonly apiLink = "https://api-ssbu.theothierry.fr/"

  constructor(private httpClient: HttpClient) { }

  getPersonnage(id: string): Observable<Personnage>{
    return this.httpClient.get<Personnage>(this.apiLink + "personnage/" + id)
  }

  getPersonnages(): Observable<Personnage[]>{
    return this.httpClient.get<Personnage[]>(this.apiLink + "personnage/")
  }

}

import {Injectable, Type} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import Univers, {UniversModification} from "./../Type/Univers"
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UniversService {


  private readonly apiLink = "https://api-ssbu.theothierry.fr/"

  constructor(private httpClient: HttpClient) { }

  getHeaders(){
    return  {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': "*",
        'Content-Type': "application/json"
      })
    }
  }

  getUnivers(): Observable<Univers[]> {
    return this.httpClient.get<Univers[]>(this.apiLink + "univers")
  }

  getUniver(univerId:string): Observable<Univers> {
    return this.httpClient.get<Univers>(this.apiLink + "univers/" + univerId + "")
  }

  modifyUnivers(univerId: string, data: UniversModification): Observable<Univers>{
    return this.httpClient.put<Univers>(this.apiLink + "univers/" + univerId + "/edit", data, this.getHeaders())
  }
}

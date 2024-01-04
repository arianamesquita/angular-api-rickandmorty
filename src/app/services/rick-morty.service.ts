import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { rickMortyData } from '../models/rickMortyData'

@Injectable({
  providedIn: 'root'
})
export class RickMortyService {
  private baseURL: string = ""
  private rickMortyData: rickMortyData | any
  constructor( private http:HttpClient ) {
    this.baseURL = environment.rickMortyAPI
  }

  getCharacter(characterName: string): Observable<rickMortyData>{
    this.rickMortyData = this.http.get<rickMortyData>(`${this.baseURL}${characterName}`)
    return this.rickMortyData
  }
}

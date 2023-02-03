import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpDataService  {
  private apiUrlram:string ="https://rickandmortyapi.com/api/character";
  private apiUrlpokemon:string ="https://pokeapi.co/api/v2/pokemon/"
  constructor(private http: HttpClient) { }

  getCaracteres():Observable<any> {
    return this.http.get<any>(this.apiUrlram);
  }

  getPokemon():Observable<any> {
    return this.http.get<any>(this.apiUrlpokemon);
  }

  getPokemonById(id:number):Observable<any>{
    return this.http.get<any>("https://pokeapi.co/api/v2/pokemon/"+id);
  }

 ngOnIint(){

 }
}

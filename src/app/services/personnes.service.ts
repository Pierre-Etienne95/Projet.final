import { Injectable, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Utilisateur } from '../models/utilisateur.type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonnesService {

  httpClient = inject(HttpClient)

  constructor() { }
  public async getPersonnes(){
    return await firstValueFrom(
      this.httpClient.get<Utilisateur[]>("http://localhost:8080/personnes")
    );
  };
}

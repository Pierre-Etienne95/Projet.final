import { Injectable } from '@angular/core';
import { Utilisateur } from '../models/utilisateur.type';

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  constructor() { }
  getUserFromJwt(): Utilisateur | null {

    const jwt =localStorage.getItem("jwt");

    if (jwt != null) {
      const bodyBase64 = jwt?.split('.')[1];
      const body = atob(bodyBase64);
      const user = JSON.parse(body);
      return user;
      
    }

    return null;
  }

  deconnexion() {
    localStorage.removeItem('jwt');
  }

}

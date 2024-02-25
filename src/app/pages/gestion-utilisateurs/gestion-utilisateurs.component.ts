import { Component, inject } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { RouterLink} from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Utilisateur } from '../../models/utilisateur.type';

@Component({
  selector: 'app-gestion-utilisateurs',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIconModule, RouterLink, HttpClientModule],
  templateUrl: './gestion-utilisateurs.component.html',
  styleUrl: './gestion-utilisateurs.component.scss'
})
export class GestionUtilisateursComponent {
  listeUtilisateurs: Utilisateur[] = [];

  httpClient = inject(HttpClient)

  ngOnInit(){
    this.refresh();
  }

  refresh(){
    this.httpClient
      .get<Utilisateur[]>("http://localhost:8080/personnes")
      .subscribe(listePersonne => this.listeUtilisateurs = listePersonne)
  }

  supprimeUtilisateur(idUtilisateur? : number) {
  if (idUtilisateur){
      this.httpClient.delete("http://localhost:8080/personne/" + idUtilisateur)
      .subscribe(retour => this.refresh());
    }
  }
}

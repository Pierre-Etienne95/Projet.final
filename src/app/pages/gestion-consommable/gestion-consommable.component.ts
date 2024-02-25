import { DatePipe } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { Consommable } from '../../models/Consommable.type';

@Component({
  selector: 'app-gestion-consommable',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIconModule, RouterLink, DatePipe],
  templateUrl: './gestion-consommable.component.html',
  styleUrl: './gestion-consommable.component.scss'
})
export class GestionConsommableComponent {

  listeConsommables: Consommable[] = [];

  httpClient = inject(HttpClient)

  ngOnInit(){
    this.refresh();
  }

  refresh(){
    this.httpClient
      .get<Consommable[]>("http://localhost:8080/consommables")
      .subscribe(listeConsommables => this.listeConsommables = listeConsommables)
  }

  supprimeConsommable(idConsommable? : number) {
  if (idConsommable){
      this.httpClient.delete("http://localhost:8080/consommable/" + idConsommable)
      .subscribe(retour => this.refresh());
    }
  }
}

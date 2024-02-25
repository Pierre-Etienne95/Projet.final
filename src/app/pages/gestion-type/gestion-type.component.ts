import { DatePipe } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { Type } from '../../models/Type.type';

@Component({
  selector: 'app-gestion-type',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIconModule, RouterLink],
  templateUrl: './gestion-type.component.html',
  styleUrl: './gestion-type.component.scss'
})
export class GestionTypeComponent {
  listeType: Type[] = [];

  httpClient = inject(HttpClient)

  ngOnInit(){
    this.refresh();
  }

  refresh(){
    this.httpClient
      .get<Type[]>("http://localhost:8080/types")
      .subscribe(listeType => this.listeType = listeType)
  }

  supprimeType(idType? : number) {
  if (idType){
      this.httpClient.delete("http://localhost:8080/type/" + idType)
      .subscribe(retour => this.refresh());
    }
  }  
}

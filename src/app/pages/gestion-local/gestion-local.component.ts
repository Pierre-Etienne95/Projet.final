import { Component, inject } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { RouterLink} from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Local } from '../../models/Local.type';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-gestion-locals',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIconModule, RouterLink],
  templateUrl: './gestion-local.component.html',
  styleUrl: './gestion-local.component.scss'
})
export class GestionLocalComponent {
  listeLocal: Local[] = [];

  httpClient = inject(HttpClient)

  ngOnInit(){
    this.refresh();
  }

  refresh(){
    this.httpClient
      .get<Local[]>("http://localhost:8080/locals")
      .subscribe(listeLocal => this.listeLocal = listeLocal)
  }

  supprimeLocal(idLocal? : number) {
  if (idLocal){
      this.httpClient.delete("http://localhost:8080/local/" + idLocal)
      .subscribe(retour => this.refresh());
    }
  }   
}

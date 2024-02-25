import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { Site } from '../../models/Site.type';

@Component({
  selector: 'app-gestion-site',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIconModule, RouterLink],
  templateUrl: './gestion-site.component.html',
  styleUrl: './gestion-site.component.scss'
})
export class GestionSiteComponent {
  listeSite: Site[] = [];

  httpClient = inject(HttpClient)

  ngOnInit(){
    this.refresh();
  }

  refresh(){
    this.httpClient
      .get<Site[]>("http://localhost:8080/sites")
      .subscribe(listeSite => this.listeSite = listeSite)
  }

  supprimeSite(idSite? : number) {
  if (idSite){
      this.httpClient.delete("http://localhost:8080/site/" + idSite)
      .subscribe(retour => this.refresh());
    }
  }

}

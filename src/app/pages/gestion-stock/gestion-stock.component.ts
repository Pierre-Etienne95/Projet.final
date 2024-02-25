import { DatePipe } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { Stock } from '../../models/Stock.type';

@Component({
  selector: 'app-gestion-stock',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIconModule, RouterLink ],
  templateUrl: './gestion-stock.component.html',
  styleUrl: './gestion-stock.component.scss'
})
export class GestionStockComponent {

  listeStocks: Stock[] = [];

  httpClient = inject(HttpClient)

  ngOnInit(){
    this.refresh();
  }

  refresh(){
    this.httpClient
      .get<Stock[]>("http://localhost:8080/stocks")
      .subscribe(listeStocks => this.listeStocks = listeStocks)
  }

  supprimeStock(idStock? : number) {
  if (idStock){
      this.httpClient.delete("http://localhost:8080/stocks/" + idStock)
      .subscribe(retour => this.refresh());
    }
  }

}

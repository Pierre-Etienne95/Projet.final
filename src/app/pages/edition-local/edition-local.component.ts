import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Local } from '../../models/Local.type';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { Site } from '../../models/Site.type';

@Component({
  selector: 'app-edition-local',
  standalone: true,
  imports: [FormsModule, MatInputModule, MatFormFieldModule, MatButtonModule, ReactiveFormsModule],
  templateUrl: './edition-local.component.html',
  styleUrl: './edition-local.component.scss'
})
export class EditionLocalComponent {

  listeSite: Site[] = []

  httpClient = inject(HttpClient);
  router = inject(Router);
  route = inject(ActivatedRoute)
  formbuilder = inject(FormBuilder);

  idLocalModifie? : number;

  formulaire = this.formbuilder.group(
    {
      nom: ["",[Validators.required]],
      mcarre: ["", [Validators.required]]
    }
  );

  ngOnInit(){
    this.route.params.subscribe((parametres)=>{

      const id = parametres['id'];

      if (!isNaN(id)){

        this.httpClient 
          .get("http://localhost:8080/local/" + id)
          .subscribe((local)=>{
            this.idLocalModifie = id;

            this.formulaire = this.formbuilder.group(
              {
                nom: ["",[Validators.required]],
                mcarre: ["", [Validators.required]]
                
              }
            );

            this.formulaire.patchValue(local);
          })
      }
    })
  }

  

  onAjoutLocal(){
    if(this.formulaire.valid){

      const local : Local = {
        id: this.idLocalModifie,
        nom: this.formulaire.value.nom ?? '',
        mcarre: Number(this.formulaire.value.mcarre) ?? 0,
      };

      this.httpClient
      .post("http://localhost:8080/local",local)
      .subscribe(() => this.router.navigate(['gestion-locals']));
    }
  }

  compareWith

  (o1: Site, o2: Site){return o1 && o2 && o1.id == o2.id}

}

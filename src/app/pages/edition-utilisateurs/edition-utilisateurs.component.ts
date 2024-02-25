import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, Router, RouterEvent } from '@angular/router';
import { Utilisateur } from '../../models/utilisateur.type';

@Component({
  selector: 'app-edition-utilisateur',
  standalone: true,
  imports: [FormsModule, MatInputModule, MatFormFieldModule, MatButtonModule, ReactiveFormsModule],
  templateUrl: './edition-utilisateurs.component.html',
  styleUrl: './edition-utilisateurs.component.scss'
})
export class EditionUtilisateurComponent {

  httpClient = inject(HttpClient);
  router = inject(Router);
  route = inject(ActivatedRoute)
  formbuilder = inject(FormBuilder);

  idUtilisateurModifie? : number;

  formulaire = this.formbuilder.group(
    {
      prenom: ["",[Validators.required]],
      nom: ["",[Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      motDePasse: ["", [Validators.required]]
    }
  );

  ngOnInit(){
    this.route.params.subscribe((parametres)=>{

      const id = parametres['id'];

      if (!isNaN(id)){

        this.httpClient
          .get("http://localhost:8080/personne/" + id)
          .subscribe((utilisateur)=>{
            this.idUtilisateurModifie = id;

            this.formulaire = this.formbuilder.group(
              {
                prenom: ["",[Validators.required]],
                nom: ["",[Validators.required]],
                email: ["", [Validators.required, Validators.email]],
                motDePasse: ["", []]
              }
            );

            this.formulaire.patchValue(utilisateur);
          })
      }
    })
  }

  

  onAjoutUtilisateur(){
    if(this.formulaire.valid){

      const utilisateur : Utilisateur = {
        id: this.idUtilisateurModifie,
        admin: false,
        email: this.formulaire.value.email ?? '',
        nom: this.formulaire.value.nom ?? '',
        prenom: this.formulaire.value.prenom ?? '',
        motDePasse: this.formulaire.value.motDePasse?? undefined,
      };

      this.httpClient
      .post("http://localhost:8080/personne",utilisateur)
      .subscribe(() => this.router.navigate(['gestion-utilisateurs']));
    }
  }
}

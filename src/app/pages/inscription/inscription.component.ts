import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-inscription',
  standalone: true,
  imports: [MatButtonModule, MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule],
  templateUrl: './inscription.component.html',
  styleUrl: './inscription.component.scss'
})
export class InscriptionComponent {
  httpClient = inject(HttpClient);
  formbuilder = inject(FormBuilder);

  emailDejaUtilise: boolean = false;

  formulaire = this.formbuilder.group({
    email: ['', [Validators.required, Validators.email]],
    motDePasse: ['', [Validators.required]]
  });

  ngOnInit() {
    this.formulaire.get('email')?.valueChanges.subscribe(() => this.emailDejaUtilise = false)
  }

  inscription() {
    if( this.formulaire.valid){
      this.httpClient
      .post("http://localhost:8080/inscription", this.formulaire.value)
      .subscribe({
        next: (utilisateur) => alert('Utilisateur créé'),
        error: (error) => {
          if ((error.status = 409)){
            this.emailDejaUtilise = true;
          }
        }
        
      });
      ;
    }
  }
}

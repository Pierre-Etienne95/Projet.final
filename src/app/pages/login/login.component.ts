import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink, Router } from '@angular/router';
import { JwtService } from '../../services/jwt.service';
import { Utilisateur } from '../../models/utilisateur.type';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatButtonModule, MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent {
  httpClient = inject(HttpClient);
  formbuilder = inject(FormBuilder);
  jwtservice = inject(JwtService);
  router = inject(Router);

  utilisateur?: Utilisateur | null = null;

  ngOnInit() {
    this.utilisateur = this.jwtservice.getUserFromJwt();
  }

  formulaire = this.formbuilder.group({
    email: ['', [Validators.required, Validators.email]],
    motDePasse: ['', [Validators.required]]
  });

  connexion() {
    if( this.formulaire.valid){
      this.httpClient.post("http://localhost:8080/login", this.formulaire.value, {
        responseType: "text", 

      })
      .subscribe((jwt) => {
        localStorage.setItem("jwt", jwt)
        this.router.navigateByUrl('/');

      });
        
    }
  }

  deconnexion() {
    this.jwtservice.deconnexion();
    this.router.navigateByUrl('/')

  }
}


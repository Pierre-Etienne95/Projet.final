import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { JwtService } from '../services/jwt.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  admin: boolean = false;

  ngOnInit(){

    const jwtService = inject(JwtService);
    const user = jwtService.getUserFromJwt();

    this.admin = user != null && user.admin;
  }
  
}

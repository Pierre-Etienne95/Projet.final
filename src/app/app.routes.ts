import { Routes } from '@angular/router';
import { AcceuilComponent } from './pages/acceuil/acceuil.component';
import { Page404Component } from './pages/page404/page404.component';
import { GestionUtilisateursComponent } from './pages/gestion-utilisateurs/gestion-utilisateurs.component';
import { EditionUtilisateurComponent } from './pages/edition-utilisateurs/edition-utilisateurs.component';
import { GestionLocalComponent } from './pages/gestion-local/gestion-local.component';
import { EditionLocalComponent } from './pages/edition-local/edition-local.component';
import { GestionSiteComponent } from './pages/gestion-site/gestion-site.component';
import { GestionStockComponent } from './pages/gestion-stock/gestion-stock.component';
import { GestionConsommableComponent } from './pages/gestion-consommable/gestion-consommable.component';
import { GestionTypeComponent } from './pages/gestion-type/gestion-type.component';
import { LoginComponent } from './pages/login/login.component';
import { InscriptionComponent } from './pages/inscription/inscription.component';

export const routes: Routes = [
    {path:'', component: AcceuilComponent},
    {path:'login', component: LoginComponent},
    {path:'inscription', component: InscriptionComponent},
    {path:'gestion-utilisateurs', component: GestionUtilisateursComponent},
    {path:'edition-utilisateur', component: EditionUtilisateurComponent},
    {path:'edition-utilisateur/:id', component: EditionUtilisateurComponent},
    {path:'gestion-locals', component: GestionLocalComponent},
    {path:'edition-local', component: EditionLocalComponent},
    {path:'edition-local/:id', component: EditionLocalComponent},
    {path:'gestion-sites', component: GestionSiteComponent},
    {path:'gestion-stocks', component: GestionStockComponent},
    {path:'gestion-consommables', component: GestionConsommableComponent},    
    {path:'gestion-types', component: GestionTypeComponent},
    
    {path:'**', component: Page404Component}
];

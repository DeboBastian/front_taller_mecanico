import { ReparationsComponent } from './components/reparations/reparations.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/users/login/login.component';
import { MechanicComponent } from './components/mechanic/mechanic.component';
import { AdministrationComponent } from './components/administration/administration.component';
import { RegisterComponent } from './components/users/register/register.component';
import { NewCarComponent } from './components/administration/new-car/new-car.component';
import { NewReparationComponent } from './components/administration/new-reparation/new-reparation.component';
import { NewClientComponent } from './components/administration/new-client/new-client.component';

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "/home" },
  { path: "home", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "administration", component: AdministrationComponent },
  { path: "administration/new", component: AdministrationComponent },
  { path: "mechanic", component: MechanicComponent },
  { path: "cars", component: NewCarComponent },
  { path: "reparations", component: NewReparationComponent },
  { path: "admin/reparations", component: ReparationsComponent},
  { path: "clients", component: NewClientComponent },
  { path: "**", redirectTo: "/home" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

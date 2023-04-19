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
import { ClientsComponent } from './components/clients/clients.component';
import { CarsComponent } from './components/cars/cars.component';
import { CardCarComponent } from './components/card-car/card-car.component';
import { CardClientComponent } from './components/card-client/card-client.component';
import { CardReparationComponent } from './components/card-reparation/card-reparation.component';
import { MechanicsComponent } from './components/mechanics/mechanics.component';
import { CardMechanicComponent } from './components/card-mechanic/card-mechanic.component';

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "/home" },
  { path: "home", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "administration", component: AdministrationComponent },
  { path: "mechanic", component: MechanicComponent },
  { path: "cars", component: NewCarComponent },
  { path: "reparations", component: NewReparationComponent },
  { path: "admin/reparations", component: ReparationsComponent },
  { path: "reparation/:id", component: CardReparationComponent },
  { path: "clients/new", component: NewClientComponent },
  { path: "clients", component: ClientsComponent },
  { path: "mechanics", component: MechanicsComponent },
  { path: "mechanics/:id", component: CardMechanicComponent },
  { path: "reparations/new", component: NewReparationComponent },
  { path: "reparations", component: ReparationsComponent },
  { path: "reparations/:id", component: CardReparationComponent },
  { path: "clients/new", component: NewClientComponent },
  { path: "clients", component: ClientsComponent },
  { path: "clients/:id", component: CardClientComponent },
  { path: "cars/new", component: NewCarComponent },
  { path: "cars", component: CarsComponent },
  { path: "cars/:id", component: CardCarComponent },
  { path: "**", redirectTo: "/home" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

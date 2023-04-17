
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/users/login/login.component';
import { MechanicComponent } from './components/mechanic/mechanic.component';
import { AdministrationComponent } from './components/administration/administration.component';
import { RegisterComponent } from './components/users/register/register.component';

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "/home" },
  { path: "home", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "administration", component: AdministrationComponent },
  { path: "clients", component: AdministrationComponent },
  { path: "mechanic", component: MechanicComponent },
  { path: "**", redirectTo: "/home" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

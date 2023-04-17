import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './components/users/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { MechanicComponent } from './components/mechanic/mechanic.component';
import { RegisterComponent } from './components/users/register/register.component';
import { AdministrationComponent } from './components/administration/administration.component';
import { ClientsComponent } from './components/clients/clients.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    MechanicComponent,
    AdministrationComponent,
    RegisterComponent,
    ClientsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

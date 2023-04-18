import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './components/users/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { MechanicComponent } from './components/mechanic/mechanic.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegisterComponent } from './components/users/register/register.component';
import { AdministrationComponent } from './components/administration/administration.component';
import { ClientsComponent } from './components/clients/clients.component';
import { NewCarComponent } from './components/administration/new-car/new-car.component';
import { NewReparationComponent } from './components/administration/new-reparation/new-reparation.component';
import { NewClientComponent } from './components/administration/new-client/new-client.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    MechanicComponent,
    NavbarComponent,
    AdministrationComponent,
    RegisterComponent,
    ClientsComponent,
    NewCarComponent,
    NewReparationComponent,
    NewClientComponent,
    FooterComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

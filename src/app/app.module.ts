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
import { NewCarComponent } from './components/administration/new-car/new-car.component';
import { NewReparationComponent } from './components/administration/new-reparation/new-reparation.component';
import { NewClientComponent } from './components/administration/new-client/new-client.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarsComponent } from './components/cars/cars.component';
import { ReparationsComponent } from './components/reparations/reparations.component';
import { CardReparationComponent } from './components/card-reparation/card-reparation.component';
import { ClientsComponent } from './components/clients/clients.component';
import { CardCarComponent } from './components/card-car/card-car.component';
import { CardClientComponent } from './components/card-client/card-client.component';
import { CardUserComponent } from './components/card-user/card-user.component';
import { CardMechanicComponent } from './components/card-mechanic/card-mechanic.component';
import { MechanicsComponent } from './components/mechanics/mechanics.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    MechanicComponent,
    NavbarComponent,
    AdministrationComponent,
    RegisterComponent,
    NewCarComponent,
    NewReparationComponent,
    NewClientComponent,
    FooterComponent,
    CarsComponent,
    ReparationsComponent,
    CardReparationComponent,
    ClientsComponent,
    CardCarComponent,
    CardClientComponent,
    CardUserComponent,
    CardMechanicComponent,
    MechanicsComponent
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

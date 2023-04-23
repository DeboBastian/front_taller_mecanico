import { ClientsService } from 'src/app/services/clients.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Client } from 'src/app/interfaces/client.interface';
import { CarsService } from 'src/app/services/cars.service';
import { Router } from '@angular/router';

@Component({
  selector: 'new-car',
  templateUrl: './new-car.component.html',
  styleUrls: ['./new-car.component.css']
})
export class NewCarComponent {

  formulary: FormGroup;
  clients: Client[];

  constructor(

    private carsService: CarsService,
    private clientsService: ClientsService,
    private router: Router
  ) {
    this.clients = []
    this.formulary = new FormGroup({
      chasis: new FormControl,
      registration: new FormControl,
      brand: new FormControl,
      model: new FormControl,
      color: new FormControl,
      km: new FormControl,
      year: new FormControl,
      doors: new FormControl,
      type: new FormControl,
      fuel: new FormControl,
      damages: new FormControl,
      clients_id: new FormControl
    })
  }

  async ngOnInit() {
    try {
      this.clients = await this.clientsService.getAllClients()
    } catch (error) {
      console.log(error)
    }

  }


  async onSubmit() {

    try {
      const response = await this.carsService.registerCar(this.formulary.value)

      this.router.navigate(['/cars'])
    } catch (error) {
      console.log(error)
    }
  }
}

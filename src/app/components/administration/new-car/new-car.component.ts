import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CarsService } from 'src/app/services/cars.service';

@Component({
  selector: 'new-car',
  templateUrl: './new-car.component.html',
  styleUrls: ['./new-car.component.css']
})
export class NewCarComponent {

  formulary: FormGroup;

  constructor(

    private carsService: CarsService

  ) {
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
      damages: new FormControl
      // clients_id: new FormControl
    })
  }


  async onSubmit() {

    try {
      const response = await this.carsService.registerCar(this.formulary.value)
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }
}

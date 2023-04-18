import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Car } from 'src/app/interfaces/car.interface';
import { User } from 'src/app/interfaces/user.interface';
import { CarsService } from 'src/app/services/cars.service';
import { ReparationsService } from 'src/app/services/reparations.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-new-reparation',
  templateUrl: './new-reparation.component.html',
  styleUrls: ['./new-reparation.component.css']
})
export class NewReparationComponent {
  formulary: FormGroup;
  cars: Car[]
  users: User[]

  constructor(

    private reparationsService: ReparationsService,
    private carsService: CarsService,
    private usersService: UsersService

  ) {
    this.cars = []
    this.users = []
    this.formulary = new FormGroup({
      status: new FormControl(),
      type: new FormControl(),
      reparation: new FormControl(),
      price: new FormControl(),
      users_id: new FormControl(),
      cars_id: new FormControl()
    })
  }


  async ngOnInit() {
    try {
      this.cars = await this.carsService.getAllCars()
      this.users = await this.usersService.getAllUsers()
      
    } catch (error) {
      console.log(error)
    }
    
  }


  async onSubmit() {

    try {
      const response = await this.reparationsService.createReparation(this.formulary.value)
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }
}

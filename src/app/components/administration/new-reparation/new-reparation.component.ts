import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ReparationsService } from 'src/app/services/reparations.service';

@Component({
  selector: 'app-new-reparation',
  templateUrl: './new-reparation.component.html',
  styleUrls: ['./new-reparation.component.css']
})
export class NewReparationComponent {
  formulary: FormGroup;

  constructor(

    private reparationsService: ReparationsService

  ) {
    this.formulary = new FormGroup({
      status: new FormControl(),
      type: new FormControl(),
      reparation: new FormControl(),
      price: new FormControl(),
      // users_id: new FormControl(),
      // cars_id: new FormControl()
    })
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

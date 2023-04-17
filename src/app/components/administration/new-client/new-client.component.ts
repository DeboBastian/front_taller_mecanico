import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ClientsService } from 'src/app/services/clients.service';

@Component({
  selector: 'app-new-client',
  templateUrl: './new-client.component.html',
  styleUrls: ['./new-client.component.css']
})
export class NewClientComponent {

  formulary: FormGroup;

  constructor(
    private clientsService: ClientsService
  ) {
    this.formulary = new FormGroup({
      name: new FormControl(),
      surname: new FormControl(),
      email: new FormControl(),
      phone: new FormControl(),
      dni: new FormControl(),
      address: new FormControl(),
      card_number: new FormControl()
    })
  }

  async onSubmit() {

    try {
      const response = await this.clientsService.registerNewClient(this.formulary.value)
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }

}
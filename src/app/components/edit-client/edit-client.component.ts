import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ClientsService } from 'src/app/services/clients.service';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})

export class EditClientComponent implements OnInit {

  clientId: number;
  clientData: any;
  formulary: FormGroup;

  constructor(
    private clientsService: ClientsService,
    private route: ActivatedRoute

  ) {

    this.clientId = 0

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

  ngOnInit(): void {
    this.route.params.subscribe(async (params) => {
      this.clientId = params['id'];
      this.clientData = await this.clientsService.getClientDetails(this.clientId);
      this.formulary.setValue(this.clientData);
    });
  }


  async onSubmit() {
    try {
      await this.clientsService.updateClient(this.clientId, this.formulary.value);
      console.log('Client updated successfully!');
    } catch (error) {
      console.log('Error updating client:', error);
    }

  }

  // async onSubmit() {
  //   try {
  //     await this.clientsService.updateClient(this.clientId, this.formulary.value);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

}

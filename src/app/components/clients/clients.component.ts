import { Component } from '@angular/core';
import { ClientsService } from 'src/app/services/clients.service';


@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent {

  clients: any[];

  constructor(private ClientsService: ClientsService) {
    this.clients = [];
  }

  async ngOnInit() {
    const response = await this.ClientsService.getAll();
    console.log(response)
    this.clients = response;
  };


  async OnClick() {
    const response = await this.ClientsService.create({
      id: '1',
      name: 'Clara',
      surname: 'Campoamor',
      email: 'rocacampoCla@gmail.com',
      phone: '675439831',
      dni: '18947695L',
      address: 'Calle La Solana nº 23, Segovia',
      card_number: 'ES123735135766342194',

    });

    console.log(response);

  }
}












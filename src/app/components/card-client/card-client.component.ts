import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Client } from 'src/app/interfaces/client.interface';
import { ClientsService } from 'src/app/services/clients.service';

@Component({
  selector: 'app-card-client',
  templateUrl: './card-client.component.html',
  styleUrls: ['./card-client.component.css']
})
export class CardClientComponent {

  client: Client

  constructor(
    private clientsService: ClientsService,
    private activatedRoute: ActivatedRoute
  ) {
    this.client = {
      id: 0,
      name: "",
      surname: "",
      email: "",
      phone: "",
      dni: "",
      address: "",
      card_number: 0
    }
  }

  ngOnInit() {
    try {
      this.activatedRoute.params.subscribe(async data => {
        this.client = await this.clientsService.getById(parseInt(data['id']));
      })

    } catch (error) {
      console.log(error)
    }
  }
}

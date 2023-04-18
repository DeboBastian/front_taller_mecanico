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
    console.log(response);
    this.clients = response;
  };

}












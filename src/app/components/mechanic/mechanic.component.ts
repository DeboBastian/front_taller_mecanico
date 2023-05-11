import { Reparation } from 'src/app/interfaces/reparation.interface';
import { ReparationsService } from 'src/app/services/reparations.service';
import { Component } from '@angular/core';


@Component({
  selector: 'mechanic',
  templateUrl: './mechanic.component.html',
  styleUrls: ['./mechanic.component.css']
})
export class MechanicComponent {

  reparations!: Reparation[]

  constructor(
        private reparationsService: ReparationsService
        ) { 
        this.reparations = [];
        }

  async ngOnInit() {
    this.reparations = await this.reparationsService.getAllReparations();
  }

  // async updateReparation(reparations: Reparation) {
  //   const confirmed = confirm(`Repair updated successfully`);
  //   if (confirmed && reparations.id != undefined) {
  //     await this.reparationsService.updateReparation(reparation.id);
  //   }
  // }


}

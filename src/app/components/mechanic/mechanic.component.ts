import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Reparation } from 'src/app/interfaces/mechanic.interface';
import { ReparationsService } from 'src/app/services/reparations.service';

@Component({
  selector: 'mechanic',
  templateUrl: './mechanic.component.html',
  styleUrls: ['./mechanic.component.css']
})
export class MechanicComponent {

    arrReparations: any[];

  constructor(private reparationsService: ReparationsService) { 
        this.arrReparations = [];
  }

  async ngOnInit(){
    const res = await this.reparationsService.getAll();
    this.arrReparations = res['results'];
  }

}

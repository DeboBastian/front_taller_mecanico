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

    //creo array series
    arrReparations: Reparation[];

  constructor(private reparationsService: ReparationsService) { 
        //inicializo array en el constructor
        this.arrReparations = [];
  }

  ngOnInit(){
    this.arrReparations = this.reparationsService.getAll();
  }

  onChange($event: any) {
    
    //visualiza TODAS las reparaciones
    if ($event.target.value === 'todos') {
      this.arrReparations = this.reparationsService.getAll();
    }

}

}

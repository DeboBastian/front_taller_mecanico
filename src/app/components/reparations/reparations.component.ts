import { ReparationsService } from 'src/app/services/reparations.service';
import { Reparation } from './../../interfaces/reparation.interface';
import { Component } from '@angular/core';

@Component({
  selector: 'app-reparations',
  templateUrl: './reparations.component.html',
  styleUrls: ['./reparations.component.css']
})
export class ReparationsComponent {

  reparationsList: Reparation[]

  constructor(
     private reparationsService: ReparationsService
  ) {
      this.reparationsList = []
  }


  async ngOnInit() {

    try {
      const response = await this.reparationsService.getAll()
      this.reparationsList = response
    } catch (error) {
      console.log(error)
    }

  }

}

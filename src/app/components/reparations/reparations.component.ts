import { ReparationsService } from 'src/app/services/reparations.service';
import { Reparation } from './../../interfaces/reparation.interface';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reparations',
  templateUrl: './reparations.component.html',
  styleUrls: ['./reparations.component.css']
})
export class ReparationsComponent {

  reparationsList: Reparation[]
  reparation: any

  constructor(
    private reparationsService: ReparationsService,
    private activatedRoute: ActivatedRoute
  ) {
    this.reparationsList = []
    this.reparation 
  }


  async ngOnInit() {

    try {
       this.reparationsList = await this.reparationsService.getAll()
    } catch (error) {
      console.log(error)
    }

  }

}

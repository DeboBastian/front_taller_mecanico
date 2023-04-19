import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Reparation } from 'src/app/interfaces/reparation.interface';
import { ReparationsService } from 'src/app/services/reparations.service';

@Component({
  selector: 'app-card-reparation',
  templateUrl: './card-reparation.component.html',
  styleUrls: ['./card-reparation.component.css']
})
export class CardReparationComponent {

  reparation: Reparation

  constructor(
    private reparationsService: ReparationsService,
    private activatedRoute: ActivatedRoute
  ) {
    this.reparation = {
      id: 0,
      date: new Date,
      status: "",
      type: "",
      reparation: "",
      price: "",
      bill_number: "",
      users_id: 0,
      cars_id: 0
    }
  }

  ngOnInit() {
    try {
      this.activatedRoute.params.subscribe(async data => {
        this.reparation = await this.reparationsService.getById(parseInt(data['id']));
      })

    } catch (error) {
      console.log(error)
    }
  }

}

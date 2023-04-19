import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Reparation } from 'src/app/interfaces/reparation.interface';
import { User } from 'src/app/interfaces/user.interface';
import { MechanicsService } from 'src/app/services/mechanics.service';
import { ReparationsService } from 'src/app/services/reparations.service';

@Component({
  selector: 'app-card-mechanic',
  templateUrl: './card-mechanic.component.html',
  styleUrls: ['./card-mechanic.component.css']
})
export class CardMechanicComponent {
  mechanic: User
  reparations: Reparation[]

  constructor(
    private mechanicService: MechanicsService,
    private reparationsService: ReparationsService,
    private activatedRoute: ActivatedRoute
  ) {
    this.mechanic = {
      id: 0,
      name: "",
      surname: "",
      birthdate: 0,
      dni: "",
      phone:"",
      email:"",
      username:"",
      password:"",
      role:"",
      incorporation_date: new Date
    }

    this.reparations = []

    }
  


  ngOnInit() {
    try {
      this.activatedRoute.params.subscribe(async data => {
        this.mechanic = await this.mechanicService.getById(parseInt(data['id']));
        
        //lanzar metodo del servicio reparaciones que devuelva las reparaciones de este mecanico
        //pintar estas reparaciones
        this.reparations = await this.reparationsService.getByUsers(parseInt(data['id']))
        console.log(this.reparations)
      })

    } catch (error) {
      console.log(error)
    }
  }
}

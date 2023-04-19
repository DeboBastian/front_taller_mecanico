import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/interfaces/user.interface';
import { MechanicsService } from 'src/app/services/mechanics.service';

@Component({
  selector: 'app-card-mechanic',
  templateUrl: './card-mechanic.component.html',
  styleUrls: ['./card-mechanic.component.css']
})
export class CardMechanicComponent {
  mechanic: User
  
  constructor(
    private mechanicService: MechanicsService,
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
  }


  ngOnInit() {
    try {
      this.activatedRoute.params.subscribe(async data => {
        this.mechanic = await this.mechanicService.getById(parseInt(data['id']));
      })

    } catch (error) {
      console.log(error)
    }
  }
}

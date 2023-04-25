import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/interfaces/user.interface';
import { CarsService } from 'src/app/services/cars.service';
import { MechanicsService } from 'src/app/services/mechanics.service';
import { ReparationsService } from 'src/app/services/reparations.service';
import { UsersService } from 'src/app/services/users.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-edit-reparation',
  templateUrl: './edit-reparation.component.html',
  styleUrls: ['./edit-reparation.component.css']
})
export class EditReparationComponent {
  formulary: FormGroup;
  users: User[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private reparationsService: ReparationsService,
    private mechanicsService: MechanicsService,
    private router: Router
  ) {
    this.users = []
    this.formulary = new FormGroup({
      date: new FormControl(null, [Validators.required]),
      status: new FormControl("", [Validators.required]),
      type_rep: new FormControl("", [Validators.required]),
      reparation: new FormControl(null, [Validators.required]),
      price: new FormControl(null, [Validators.required]),
      bill_number: new FormControl(null, [Validators.required]),
      users_id: new FormControl("", [Validators.required]),
      cars_id: new FormControl("", [Validators.required])
    })
  }


  ngOnInit() {
    
    this.activatedRoute.params.subscribe(async params => {
      
      const res = await this.reparationsService.getById(parseInt(params['id']));
      
      delete res.id;
      this.formulary.setValue(res);
      this.users = await this.mechanicsService.getAllMechanics()
    });
  }


  async onSubmit() {
    this.activatedRoute.params.subscribe(async params => {
      const response = await this.reparationsService.updateReparation(this.formulary.value, parseInt(params['id']));
       this.router.navigate(['/reparations'])
      if (response.fatal) {
        await Swal.fire('Update failed ', '', 'error');
      } 
     
    })

    
  }



}

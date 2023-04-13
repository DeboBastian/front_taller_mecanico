import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  formulary: FormGroup;

  constructor(
    private usersService: UsersService,
    private router: Router
  ) {
    

    this.formulary = new FormGroup({

      name: new FormControl(null, [
        Validators.required
      ]),

      surname: new FormControl(null, [
        Validators.required
      ]),

      phone: new FormControl(null, [
        Validators.required
      ]),

      birthdate: new FormControl(null, [
        Validators.required
      ]),

      dni: new FormControl(null, [
        Validators.required
      ]),
      email: new FormControl(null, [
        Validators.required
      ]),

      username: new FormControl(null, [
        Validators.required
      ]),

      password: new FormControl(null, [
        Validators.required
      ]),

      repeatpassword: new FormControl(null, [
        Validators.required
      ]),

      role: new FormControl("", [
        Validators.required
      ])

    })

  }
  



 onSubmit() {
  console.log(this.formulary.value)
}



checkError(control: string, validator: string) {
  return this.formulary.get(control)?.hasError(validator) && this.formulary.get(control)?.touched
}

}
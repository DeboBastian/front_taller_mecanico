import { User } from './../../../interfaces/user.interface';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  formulary: FormGroup;
  user!: User;

  constructor(
    private usersService: UsersService,
    private router: Router

  ) {
    
    this.formulary = new FormGroup({
      dni: new FormControl,
        // (null, [Validators.required]),
      email: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required])
      
    })
  }


  async onSubmit() {

    try {
      const response = await this.usersService.login(this.formulary.value)
      const { token } = response
      console.log(token)
      localStorage.setItem('token_key', token)
      const tokenDecode = this.usersService.decodeToken()
      console.log(tokenDecode)

        if (tokenDecode.user_role === 'mechanic') {
          this.router.navigate(['/mechanic'])
        } else {
          this.router.navigate(['/administration'])
        }
      
      
    } catch (error) {
      console.log(error)
    }
  }


checkError(control: string, validator: string) {
 return this.formulary.get(control)?.hasError(validator) && this.formulary.get(control)?.touched
}

}
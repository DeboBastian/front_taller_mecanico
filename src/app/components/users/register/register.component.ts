import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
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
        Validators.required,
        Validators.minLength(3)
      ]),

      surname: new FormControl(null, [
        Validators.required
      ]),

      birthdate: new FormControl(null, [
        Validators.required
      ]),
 
      dni: new FormControl(null, [
        Validators.required,
        this.dniValidator
      ]),
 
      phone: new FormControl(null, [
        Validators.required
      ]),
     
      email: new FormControl(null, [
        Validators.required,
        Validators.pattern("/^\w + ([\.-] ?\w +) *@\w + ([\.-] ?\w +)* (\.\w{ 2, 3 }) +$ /")
      ]),

      username: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(12)
      ]),

      password: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,8}$/)
      ]),

      // repeatpassword: new FormControl(null, [
      //   Validators.required,
      //   this.passwordValidator
      // ]),

      role: new FormControl("", [
        Validators.required
      ])

    })

  }
  


  dniValidator(control: AbstractControl) {
   
    const dni: string = control.value;
    const listaLetras = 'TRWAGMYFPDXBNJZSQVHLCKET';

    if (!dni) return null;
    if (/^\d{8}[a-zA-Z]$/.test(dni)) {
      const numero = dni.substring(0, dni.length - 1);
      const letra = dni.substring(dni.length - 1);

      const resultado = parseInt(numero) % 23;

      if (letra.toUpperCase() !== listaLetras.at(resultado)) {
        return { dnivalidator: 'La letra no coincide' };
      } 
      return null;
    }
    return { dnivalidator: 'El formato del DNI es incorrecto' }
  }



 
  passwordValidator(form: AbstractControl) {
    
    const password = form.get('password')?.value;
    const repeatPassword = form.get('repeatpassword')?.value;

    if (password === repeatPassword) {
      return null
    } else {
      form.get('repeatpassword')?.setErrors({ passwordvalidator: 'Password is not the same' })
      return { passwordvalidator: 'Password is not the same' }
    }
    return null;
  }

  
  async onSubmit() {

    try {
      const newUser = await this.usersService.register(this.formulary.value)
      console.log(newUser)
      this.router.navigate(['/login'])
    } catch (error) {
      console.log(error)
    }
  }


checkError(control: string, validator: string) {
  return this.formulary.get(control)?.hasError(validator) && this.formulary.get(control)?.touched
}

}
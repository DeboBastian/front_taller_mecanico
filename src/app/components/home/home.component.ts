import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {


  loginBoton() {
    console.log('Le has dado click')
  }

  signupBoton() {
    console.log('Le has dado click')
  }


}

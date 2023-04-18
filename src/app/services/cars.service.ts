import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CarsService {

  private baseUrl: string;
  
  constructor(
    private httpClient: HttpClient
  ) {
    this.baseUrl = 'http://localhost:3000/api/cars'
  }

  registerCar(body: any) {
    return firstValueFrom(
      this.httpClient.post<any>(this.baseUrl, body)
    )
  }

  getAllCars() {
    return firstValueFrom(this.httpClient.get<any>(this.baseUrl))
  }

}

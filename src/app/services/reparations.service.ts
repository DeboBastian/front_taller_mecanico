import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReparationsService {

  private baseUrl: string;

  constructor(
    private httpClient: HttpClient
  ) { 
    this.baseUrl = 'http://localhost:3000/api/reparations'
  }


  createReparation(body: any) {
    return firstValueFrom(
      this.httpClient.post<any>(this.baseUrl, body)
    )

} 

  getAllReparations() {
    return firstValueFrom(this.httpClient.get<any>(this.baseUrl))
  }

  getById(id: number) {
    return firstValueFrom(this.httpClient.get<any>(`${this.baseUrl}/${id}`))
  }


   getByUsers(id: number) {
    return firstValueFrom(this.httpClient.get<any>(`${this.baseUrl}/mechanic/reparations/${id}`))
  }


  mechanicForReparations(id: number) {
    return firstValueFrom(this.httpClient.get<any>(`${this.baseUrl}/mechanic/${id}`))
  }


  deleteReparation(id: number) {
    return firstValueFrom(this.httpClient.delete<any>(`${this.baseUrl}/${id}`))
  }


  updateReparation(values: any, id: number) {
    return firstValueFrom(
      this.httpClient.put<any>(`${this.baseUrl}/edit/${id}`, values)
    );
  }
}



import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  private baseUrl: string;
  constructor(
    private httpClient: HttpClient
  ) {
    this.baseUrl = 'http://localhost:3000/api/clients'
  }



  
  getAllClients() {
    return firstValueFrom<any[]>(this.httpClient.get<any>(this.baseUrl))
  }


  registerNewClient(body: any) {
    return firstValueFrom(
      this.httpClient.post<any>(this.baseUrl, body)
    );
  }

  getById(id: number) {
    return firstValueFrom(this.httpClient.get<any>(`${this.baseUrl}/${id}`))
  }


  getByClient(id: number) {
    return firstValueFrom(this.httpClient.get<any>(`${this.baseUrl}/car/${id}`))
  }
}














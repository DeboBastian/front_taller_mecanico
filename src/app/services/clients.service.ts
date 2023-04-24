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

  getClientDetails(clientId: number) {
    return this.httpClient.get(`${this.baseUrl}/${clientId}`);
  }

  deleteClient(id: number) {
    return firstValueFrom<any>(
      this.httpClient.delete<any>(`${this.baseUrl}/${id}`)
    );
  }

  updateClient(id: number, body: any) {
    return firstValueFrom(
      this.httpClient.put<any>(`${this.baseUrl}/${id}`, body)
    );
  }
}














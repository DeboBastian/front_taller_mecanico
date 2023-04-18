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
    this.baseUrl = 'http://localhost:3000/api/users'
  }



  getAll() {
   
    return firstValueFrom<any[]>(this.httpClient.get<any>(this.baseUrl))
  }

  getAllClients() {
    return firstValueFrom<any[]>(this.httpClient.get<any>(this.baseUrl))
  }


  registerNewClient(body: any) {
    const options = {
      headers: new HttpHeaders({
        'Autorization': localStorage.getItem('token_clients')!
      })
    };
    return firstValueFrom(
      this.httpClient.post<any>(this.baseUrl, body, options)
    );
  }


}














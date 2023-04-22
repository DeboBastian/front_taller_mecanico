import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import JwtDecode from 'jwt-decode';



@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private baseUrl: string;
  constructor(
    private httpClient: HttpClient
  ) {
    this.baseUrl = 'http://localhost:3000/api/users'
  }


  getAllUsers() {
    return firstValueFrom(this.httpClient.get<any>(this.baseUrl))
  }


  register(body: any) {
    return firstValueFrom(
      this.httpClient.post<any>(`${this.baseUrl}/register`, body)
    )
  }


  login(body: any) {
    return firstValueFrom(
      this.httpClient.post<any>(`${this.baseUrl}/login`, body)
    )
  }


  decodeToken() {
    return JwtDecode<any>(localStorage.getItem('token_key')!)
  }

  updateAdminEmployeer(values: any, id: number) {
    return firstValueFrom(
      this.httpClient.put<any>(`${this.baseUrl}/edit/${id}`, values)
    );
  }

  
  deleteAdmin(id: number) {
    return firstValueFrom(this.httpClient.delete<any>(`${this.baseUrl}/admin/${id}`))
  }

  
  getAllAdmin() {
    return firstValueFrom(this.httpClient.get<any>(`${this.baseUrl}/admins`))
  }


  getAdminById(id: number) {
    return firstValueFrom(this.httpClient.get<any>(`${this.baseUrl}/admins/${id}`))
  }



}
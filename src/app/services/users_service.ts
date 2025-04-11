import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import User from "../models/users_interface";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private apiUrl = 'http://localhost:8080'; 

  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }
  login(credentials: { email: string; password: string }): Observable<{ message: string; user: User }> {
    return this.http.post<{ message: string; user: User }>(`${this.apiUrl}/login`, credentials);
  }
  register(data: { name: string; email: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/users`, data);
  }
  
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import Dessert from "../models/Dessert_Interface";

@Injectable({
  providedIn: 'root'
})
export class DessertService {
  private apiUrl = 'http://localhost:8080/desserts'; 

  constructor(private http: HttpClient) {}

  getAllDesserts(): Observable<Dessert[]> {
    return this.http.get<Dessert[]>(this.apiUrl);
  }

  createDessert(data: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.apiUrl, data, { headers });
  }

  updateDessert(id: number, dessert: Dessert): Observable<Dessert> {
    return this.http.put<Dessert>(`${this.apiUrl}/${id}`, dessert);
  }

  deleteDessert(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}

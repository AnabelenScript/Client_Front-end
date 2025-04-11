import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import Pedido from '../models/pedido_interface';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  private apiUrl = 'http://localhost:8080/pedidos';

  constructor(private http: HttpClient) {}
  
  getAllPedidos(): Observable<Pedido[]> {
    return this.http.get<Pedido[]>(this.apiUrl);
  }
  createPedido(pedido: Pedido): Observable<Pedido> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Pedido>(this.apiUrl, pedido, { headers });
  }
}

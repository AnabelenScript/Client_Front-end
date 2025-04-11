// src/app/services/dessert-modal.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import Dessert from '../models/dessert_Interface';

@Injectable({
  providedIn: 'root'
})
export class DessertModalService {
  private dessertSource = new BehaviorSubject<Dessert | null>(null);
  dessert$ = this.dessertSource.asObservable();

  openDessert(dessert: Dessert) {
    this.dessertSource.next(dessert);
  }

  closeDessert() {
    this.dessertSource.next(null);
  }
}

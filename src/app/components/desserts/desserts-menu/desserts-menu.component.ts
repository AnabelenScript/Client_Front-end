import { Component, OnInit } from '@angular/core';
import { DessertService } from '../../../services/dessert_service';
import Dessert from '../../../models/dessert_Interface';
import { DessertModalService } from '../../../services/dessertModal_service';

@Component({
  selector: 'app-desserts-menu',
  templateUrl: './desserts-menu.component.html',
  styleUrls: ['./desserts-menu.component.css']
})
export class DessertsMenuComponent implements OnInit {
  desserts: Dessert[] = [];

  constructor(
    private dessertsService: DessertService,
    private modalService: DessertModalService
  ) {}

  ngOnInit(): void {
    this.dessertsService.getAllDesserts().subscribe({
      next: (res) => this.desserts = res,
      error: (err) => console.error('Error al cargar los postres:', err)
    });
  }

  openDessertModal(dessert: Dessert): void {
    this.modalService.openDessert(dessert);
  }
}

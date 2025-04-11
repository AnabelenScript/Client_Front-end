import { Component, OnInit } from '@angular/core';
import Dessert from "../../../models/dessert_Interface";
import { DessertService } from '../../../services/dessert_service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-desserts-dashboard',
  templateUrl: './desserts-dashboard.component.html',
  styleUrls: ['./desserts-dashboard.component.css']
})
export class DessertsDashboardComponent implements OnInit {
  Desserts: Dessert[] = [];
  selectedDessert: Dessert = {} as Dessert;
  isModalOpen: boolean = false;
  isAdmin: boolean = false;

  constructor(
    private dessertService: DessertService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.dessertService.getAllDesserts().subscribe((data: Dessert[]) => {
      this.Desserts = data;
    });
  }

  openEditModal(dessert: Dessert): void {
    if (this.isModalOpen) {
      return; 
    }
    this.selectedDessert = { ...dessert }; 
    this.isModalOpen = true; 
  }
  closeEditModal(): void {
    this.isModalOpen = false; 
  }

  saveChanges(): void {
    this.dessertService.updateDessert(this.selectedDessert.Id!, this.selectedDessert)
      .subscribe(() => {
        this.Desserts = this.Desserts.map(d =>
          d.Id === this.selectedDessert.Id ? { ...this.selectedDessert } : d
        );
        this.closeEditModal();
      });
  }

  deleteDessert(id: number): void {
    if (confirm("¿Seguro que deseas eliminar este postre?")) {
      this.dessertService.deleteDessert(id).subscribe(() => {
        this.Desserts = this.Desserts.filter(d => d.Id !== id);
      });
    }
  }
  onDessertCreated(): void {
    this.dessertService.getAllDesserts().subscribe((data: Dessert[]) => {
      this.Desserts = data;
    });
  }
}

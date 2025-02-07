import { Component,  EventEmitter, Output } from '@angular/core';
import Dessert from '../../../models/Dessert_Interface';
import { DessertService } from '../../../services/dessert_service';

@Component({
  selector: 'app-dessert-create',
  templateUrl: './dessert-create.component.html',
  styleUrls: ['./dessert-create.component.css']
})
export class DessertCreateComponent {
  @Output() dessertCreated = new EventEmitter<void>(); 
  isModalOpen: boolean = false;
  newDessert: Dessert = {
    Id: 0,
    Name: '',
    Flavor: '',
    Quantity: 0,
    Price: 0
  };

  constructor(private dessertService: DessertService) {}

  openModal(): void {
    console.log('Abriendo modal de creación');
    this.isModalOpen = true;
  }

  closeModal(): void {
    console.log('Cerrando modal de creación');
    this.isModalOpen = false;
  }

  saveDessert(): void {
    const dessertData = {
      Name: this.newDessert.Name,
      Flavor: this.newDessert.Flavor,
      Quantity: this.newDessert.Quantity,
      Price: this.newDessert.Price
    };
    this.dessertService.createDessert(dessertData).subscribe({
      next: () => {
        alert('Postre creado exitosamente');
        this.dessertCreated.emit();
        this.closeModal();
        this.newDessert = { Id: 0, Name: '', Flavor: '', Quantity: 0, Price: 0 };
      },
      error: (error) => {
        alert('Error al crear el postre.');
      }
    });
  }
}
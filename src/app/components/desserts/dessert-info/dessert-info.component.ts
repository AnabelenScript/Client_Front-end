import { Component, OnInit } from '@angular/core';
import Dessert from '../../../models/dessert_Interface';
import { DessertModalService } from '../../../services/dessertModal_service';
import { ModalControlService } from '../../../services/pedidoModal_service';

@Component({
  selector: 'app-dessert-info',
  templateUrl: './dessert-info.component.html',
  styleUrls: ['./dessert-info.component.css']
})
export class DessertInfoComponent implements OnInit {
  dessert: Dessert | null = null;

  constructor(
    private modalService: DessertModalService,
    private modalControlService: ModalControlService) {}

  ngOnInit(): void {
    this.modalService.dessert$.subscribe((dessert) => {
      this.dessert = dessert;
    });
  }

  closeModal() {
    this.modalService.closeDessert();
    this.modalControlService.closePedidoModal();
  }

  openPedido() {
    this.modalControlService.openPedidoModal();
  }
}

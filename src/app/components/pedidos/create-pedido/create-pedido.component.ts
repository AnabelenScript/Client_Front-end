import { DessertService } from '../../../services/dessert_service';
import { ModalControlService } from './../../../services/pedidoModal_service';
import { PedidoService } from '../../../services/pedidos_service';
import { Component, Input, OnInit } from '@angular/core';
import Dessert from '../../../models/dessert_Interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-pedido',
  templateUrl: './create-pedido.component.html',
  styleUrls: ['./create-pedido.component.css']
})
export class CreatePedidoComponent implements OnInit {
  @Input() dessert!: Dessert; 
  isVisible: boolean = false;
  quantity: number = 1;

  constructor(
    private modalControlService: ModalControlService,
    private pedidoService: PedidoService,
    private dessertService: DessertService
  ) {}

  ngOnInit(): void {
    this.modalControlService.showPedidoModal$.subscribe(visible => {
      this.isVisible = visible;
    });
  }
  get total(): number {
    return this.dessert ? this.dessert.Price * this.quantity : 0;
  }
  createOrder() {
    const userData = localStorage.getItem('loggedUser');
    const parsedUser = userData ? JSON.parse(userData) : null;
    const userId = parsedUser?.id;
    if (!userId) {
      Swal.fire({
        icon: 'error',
        title: 'Usuario no identificado',
        text: 'No se pudo identificar al usuario. Inicia sesión nuevamente.',
      });
      return;
    }
    const pedido = {
      dessert_id: this.dessert?.Id,
      user_id: userId,
      cantidad_producto: this.quantity,
      estatus: 'Pagado',
      total: this.total
    };
    this.pedidoService.createPedido(pedido).subscribe({
      next: (res) => {
        Swal.fire({
          icon: 'success',
          title: '¡Pago exitoso!',
          text: `Tu pago de $${this.total} fue exitoso.`,
          confirmButtonText: 'Aceptar'
        }).then(() => {
          this.modalControlService.closePedidoModal();
        });
        console.log('Pedido creado con éxito:', res);
      },
      error: (err) => {
        console.error('Error al crear el pedido:', err);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Ocurrió un error al crear tu pedido. Inténtalo de nuevo.',
        });
      }
    });
    this.dessertService.getAllDesserts()
  }
}

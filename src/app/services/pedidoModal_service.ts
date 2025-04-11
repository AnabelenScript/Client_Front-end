import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalControlService {
  private showPedidoModalSubject = new BehaviorSubject<boolean>(false);
  showPedidoModal$ = this.showPedidoModalSubject.asObservable();

  openPedidoModal() {
    this.showPedidoModalSubject.next(true);
  }

  closePedidoModal() {
    this.showPedidoModalSubject.next(false);
  }
}

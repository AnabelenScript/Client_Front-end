import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatePedidoComponent } from './create-pedido/create-pedido.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CreatePedidoComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
     CreatePedidoComponent]
   
  
})
export class PedidosModule { }

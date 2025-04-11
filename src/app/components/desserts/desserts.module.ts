import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { DessertsDashboardComponent } from './desserts-dashboard/desserts-dashboard.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DessertCreateComponent } from './dessert-create/dessert-create.component';
import { UsersModule } from '../users/users.module';
import { DessertsMenuComponent } from './desserts-menu/desserts-menu.component';
import { DessertInfoComponent } from './dessert-info/dessert-info.component';
import { PedidosModule } from '../pedidos/pedidos.module';

@NgModule({
  declarations: [
    DessertsDashboardComponent,
    DessertCreateComponent,
    DessertsMenuComponent,
    DessertInfoComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    CurrencyPipe,
    UsersModule,
    PedidosModule
  ],
  exports:[
    DessertsDashboardComponent,
    DessertCreateComponent,
    DessertInfoComponent,
    
  ]
})
export class DessertsModule { }

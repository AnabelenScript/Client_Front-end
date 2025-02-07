import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { DessertsDashboardComponent } from './desserts-dashboard/desserts-dashboard.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DessertCreateComponent } from './dessert-create/dessert-create.component';

@NgModule({
  declarations: [
    DessertsDashboardComponent,
    DessertCreateComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    CurrencyPipe
  ],
  exports:[
    DessertsDashboardComponent,
    DessertCreateComponent
  ]
})
export class DessertsModule { }

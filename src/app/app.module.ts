import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CurrencyPipe } from '@angular/common';
import { DessertsModule } from './components/desserts/desserts.module';
import { UsersModule } from './components/users/users.module';
import { PedidosModule } from './components/pedidos/pedidos.module';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DessertsModule,
    UsersModule,
    PedidosModule
],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch()),
    CurrencyPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

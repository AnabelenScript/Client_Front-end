import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { RegisterComponent } from './register/register.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterLink
  ], 
  exports:[
    LoginComponent
  ]
})
export class UsersModule { }

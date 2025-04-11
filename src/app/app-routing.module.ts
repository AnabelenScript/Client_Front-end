import { LoginComponent } from './components/users/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DessertsDashboardComponent } from './components/desserts/desserts-dashboard/desserts-dashboard.component';
import { RegisterComponent } from './components/users/register/register.component';
import { DessertsMenuComponent } from './components/desserts/desserts-menu/desserts-menu.component';

const routes: Routes = [
  {path: 'dessert-table', component: DessertsDashboardComponent},
  {path: '', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'desserts-menu', component: DessertsMenuComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

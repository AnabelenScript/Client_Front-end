import { LoginComponent } from './components/users/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DessertsDashboardComponent } from './components/desserts/desserts-dashboard/desserts-dashboard.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: '', component: DessertsDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component } from '@angular/core';
import { UsersService } from '../../../services/users_service';
import User from '../../../models/users_interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginData = { email: '', password: '' };
  isAdmin: boolean = false;
  currentUser: User | null = null;

  constructor(
    private usersService: UsersService,
    private router: Router
  ) {}

  loginUser(): void {
    this.usersService.login(this.loginData).subscribe({
      next: (res) => {
        const user: User = {
          id: res.user.id,
          name: res.user.name,
          email: res.user.email,
          user_type: res.user.user_type || 0,
        };

        this.currentUser = user;
        this.isAdmin = user.user_type === 1;
        localStorage.setItem('loggedUser', JSON.stringify(user));

        console.log(`Bienvenido ${user.name} (${this.isAdmin ? 'Admin' : 'Cliente'})`);
        if (this.isAdmin) {
          this.router.navigate(['/desserts-table']); 
        } else {
          this.router.navigate(['/desserts-menu']);
        }
      },
      error: (err) => {
        console.error('Error de login:', err);
        alert('Credenciales inválidas');
      }
    });
  }
}

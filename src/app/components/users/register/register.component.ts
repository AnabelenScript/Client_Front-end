import { Component } from '@angular/core';
import { UsersService } from '../../../services/users_service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerData = {
    name: '',
    email: '',
    password: ''
  };

  constructor(
    private usersService: UsersService,
    private router: Router
  ) {}

  registerUser(): void {
    this.usersService.register(this.registerData).subscribe({
      next: (res) => {
        console.log('Usuario registrado:', res);
        alert('Registro exitoso. Ahora puedes iniciar sesión.');
        this.router.navigate(['/login']);
      },
      error: (err) => {
        console.error('Error al registrar usuario:', err);
        alert('Error al registrar. Verifica los datos.');
      }
    });
  }
}

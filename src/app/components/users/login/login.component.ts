import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../services/users_service';
import User from '../../../models/users_interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isAdmin: boolean = false; 
  currentUser: User | null = null;

  constructor(
    private usersService: UsersService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (typeof localStorage !== 'undefined') {
      const storedUser = localStorage.getItem('currentUser');
      if (storedUser) {
        this.currentUser = JSON.parse(storedUser);
  
        if (this.currentUser) {
          this.isAdmin = this.currentUser.User_type === 1;
          console.log(`Sesión activa: ${this.currentUser.Name} (${this.isAdmin ? 'Administrador' : 'Usuario Normal'})`);
          this.router.navigate(['/desserts']);
        }
      }
    }
  }
  

  getUsers(): void {
    this.usersService.getAllUsers().subscribe((users: User[]) => {
      console.log(users)
      const currentUser = users.find(user => user.ID === 1);
      if (currentUser) {
        this.isAdmin = currentUser.User_type === 1;
        this.currentUser = currentUser;
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        console.log(`El usuario ${currentUser.Name} es ${this.isAdmin ? 'Administrador' : 'Usuario Normal'}`);
        this.router.navigate(['/desserts']);
      } else {
        console.error('Usuario no encontrado.');
      }
    }, error => {
      console.error('Error al obtener los usuarios:', error);
    });
  }
}

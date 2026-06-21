import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  email = '';
  password = '';

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  login() {

    const data = {
      email: this.email,
      password: this.password
    };

    this.http.post(
      'https://aurex-api-1.onrender.com/api/auth/login',
      data
    ).subscribe({

      next: (res: any) => {

        if (res.role !== 'admin') {
          alert('Access Denied. Admin Only');
          return;
        }

        localStorage.setItem(
          'token',
          res.token
        );

        localStorage.setItem(
          'user',
          JSON.stringify(res)
        );

        alert('Login Successful');

        this.router.navigate([
          '/dashboard'
        ]);

      },

      error: (err) => {

        console.log(err);

        alert(
          err.error.message ||
          'Login Failed'
        );

      }

    });

  }

}
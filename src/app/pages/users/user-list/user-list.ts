import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user';

@Component({
  selector: 'app-user-list',
  standalone: false,
  templateUrl: './user-list.html',
  styleUrl: './user-list.css'
})
export class UserList implements OnInit {

  users: any[] = [];

  constructor(
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {

    this.userService.getUsers().subscribe({

      next: (res: any) => {
        this.users = res;
      },

      error: (err) => {
        console.log(err);
      }

    });

  }

  changeRole(user: any) {

    const newRole =
      user.role === 'admin'
        ? 'customer'
        : 'admin';

    this.userService
      .updateUser(
        user._id,
        {
          role: newRole
        }
      )
      .subscribe({

        next: () => {

          alert(
            `Role changed to ${newRole}`
          );

          this.getUsers();

        },

        error: (err) => {
          console.log(err);
          alert('Role Update Failed');
        }

      });

  }

  deleteUser(id: string) {

    if (confirm('Delete User?')) {

      this.userService
        .deleteUser(id)
        .subscribe({

          next: () => {

            alert(
              'User Deleted Successfully'
            );

            this.getUsers();

          },

          error: (err) => {
            console.log(err);
          }

        });

    }

  }

}
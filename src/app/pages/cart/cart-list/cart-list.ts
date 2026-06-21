import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../services/cart';

@Component({
  selector: 'app-cart-list',
  standalone: false,
  templateUrl: './cart-list.html',
  styleUrl: './cart-list.css'
})
export class CartList implements OnInit {

  carts: any[] = [];

  constructor(
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.getCarts();
  }

  getCarts() {

    this.cartService
      .getCarts()
      .subscribe({

        next: (res: any) => {

          this.carts = res;

        },

        error: (err) => {

          console.log(err);

        }

      });

  }

  deleteCart(id: string) {

    if (confirm('Delete Cart Item?')) {

      this.cartService
        .deleteCart(id)
        .subscribe({

          next: () => {

            alert('Cart Item Deleted Successfully');

            this.getCarts();

          },

          error: (err) => {

            console.log(err);

          }

        });

    }

  }

}
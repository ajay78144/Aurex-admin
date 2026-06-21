import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../../services/order';

@Component({
  selector: 'app-order-list',
  standalone: false,
  templateUrl: './order-list.html',
  styleUrl: './order-list.css'
})
export class OrderList implements OnInit {

  orders: any[] = [];

  constructor(
    private orderService: OrderService
  ) {}

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders() {

    this.orderService
      .getOrders()
      .subscribe({

        next: (res: any) => {
          this.orders = res;
        },

        error: (err) => {
          console.log(err);
        }

      });

  }

  updateStatus(order: any) {

    this.orderService
      .updateOrder(
        order._id,
        {
          orderStatus: order.orderStatus
        }
      )
      .subscribe({

        next: () => {
          alert('Order Status Updated Successfully');
        },

        error: (err) => {
          console.log(err);
        }

      });

  }

  viewOrder(order: any) {

    let products = '';

    order.products.forEach((item: any) => {

      products += `
${item.product?.name}
Qty: ${item.quantity}
Price: ₹${item.price}

`;

    });

    alert(

`Order ID: ${order._id}

Customer Name: ${order.customer?.name}

Email: ${order.shippingAddress?.email}

Phone: ${order.shippingAddress?.phone}

Address: ${order.shippingAddress?.address}

City: ${order.shippingAddress?.city}

State: ${order.shippingAddress?.state}

Pincode: ${order.shippingAddress?.pincode}

--------------------------------

Products:

${products}

--------------------------------

Payment Method: ${order.paymentMethod}

Total Amount: ₹${order.totalAmount}

Order Status: ${order.orderStatus}

Order Date: ${new Date(order.createdAt).toLocaleDateString()}`

    );

  }

  deleteOrder(id: string) {

    if (confirm('Are you sure you want to delete this order?')) {

      this.orderService
        .deleteOrder(id)
        .subscribe({

          next: () => {

            alert('Order Deleted Successfully');

            this.getOrders();

          },

          error: (err) => {
            console.log(err);
          }

        });

    }

  }

}
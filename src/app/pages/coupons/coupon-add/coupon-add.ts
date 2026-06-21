import { Component } from '@angular/core';
import { CouponService } from '../../../services/coupon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-coupon-add',
  standalone: false,
  templateUrl: './coupon-add.html',
  styleUrl: './coupon-add.css'
})
export class CouponAdd {

  coupon = {
    code:'',
    discount:''
  };

  constructor(
    private couponService: CouponService,
    private router: Router
  ){}

  addCoupon(){

    this.couponService
    .addCoupon(this.coupon)
    .subscribe({

      next:()=>{

        alert('Coupon Added Successfully');

        this.router.navigate(
          ['/coupons']
        );

      },

      error:(err:any)=>{
        console.log(err);
      }

    });

  }

}
import { Component, OnInit } from '@angular/core';
import { CouponService } from '../../../services/coupon';

@Component({
  selector: 'app-coupon-list',
  standalone: false,
  templateUrl: './coupon-list.html',
  styleUrl: './coupon-list.css'
})
export class CouponList implements OnInit {

  coupons:any[] = [];

  constructor(
    private couponService: CouponService
  ){}

  ngOnInit(): void {
    this.getCoupons();
  }

  getCoupons(){

    this.couponService.getCoupons()
    .subscribe({

      next:(res:any)=>{
        this.coupons = res;
      },

      error:(err:any)=>{
        console.log(err);
      }

    });

  }

  deleteCoupon(id:string){

    if(confirm('Delete Coupon ?')){

      this.couponService
      .deleteCoupon(id)
      .subscribe({

        next:()=>{
          this.getCoupons();
        },

        error:(err:any)=>{
          console.log(err);
        }

      });

    }

  }

}
import { Component, OnInit } from '@angular/core';
import { ReviewService } from '../../../services/review';

@Component({
  selector: 'app-review-list',
  standalone: false,
  templateUrl: './review-list.html',
  styleUrl: './review-list.css'
})
export class ReviewList implements OnInit {

  reviews:any[] = [];

  constructor(
    private reviewService: ReviewService
  ){}

  ngOnInit(): void {
    this.getReviews();
  }

  getReviews(){

    this.reviewService
      .getReviews()
      .subscribe({

        next:(res:any)=>{
          this.reviews = res;
        },

        error:(err)=>{
          console.log(err);
        }

      });

  }

  deleteReview(id:string){

    if(confirm('Delete Review?')){

      this.reviewService
        .deleteReview(id)
        .subscribe({

          next:()=>{
            this.getReviews();
          },

          error:(err)=>{
            console.log(err); 
          }

        });

    }

  }

}
import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../services/category';

@Component({
  selector: 'app-category-list',
  standalone: false,
  templateUrl: './category-list.html',
  styleUrl: './category-list.css'
})
export class CategoryList implements OnInit {

  categories:any[] = [];

  constructor(
    private categoryService: CategoryService
  ){}

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(){

    this.categoryService
      .getCategories()
      .subscribe({

        next:(res:any)=>{
          this.categories = res;
        },

        error:(err)=>{
          console.log(err);
        }

      });

  }

  deleteCategory(id:string){

    if(confirm('Delete Category?')){

      this.categoryService
        .deleteCategory(id)
        .subscribe({

          next:()=>{
            this.getCategories();
          },

          error:(err)=>{
            console.log(err);
          }

        });

    }

  }

}
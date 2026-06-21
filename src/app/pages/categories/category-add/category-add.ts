import { Component } from '@angular/core';
import { CategoryService } from '../../../services/category';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-add',
  standalone: false,
  templateUrl: './category-add.html',
  styleUrl: './category-add.css'
})
export class CategoryAdd {

  category = {
    name:'',
    description:'',
    image:''
  };

  constructor(
    private categoryService: CategoryService,
    private router: Router
  ){}

  addCategory(){

    this.categoryService
      .createCategory(this.category)
      .subscribe({

        next:()=>{

          alert(
            'Category Added Successfully'
          );

          this.router.navigate(
            ['/categories']
          );

        },

        error:(err)=>{
          console.log(err);
        }

      });

  }

}
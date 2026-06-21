import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../services/category';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-category-edit',
  standalone: false,
  templateUrl: './category-edit.html',
  styleUrl: './category-edit.css'
})
export class CategoryEdit implements OnInit {

  categoryId = '';

  category:any = {
    name:'',
    description:'',
    image:''
  };

  constructor(
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {

    this.categoryId =
      this.route.snapshot.params['id'];

    this.getCategory();

  }

  getCategory(){

    this.categoryService
      .getCategoryById(this.categoryId)
      .subscribe({

        next:(res:any)=>{
          this.category = res;
        },

        error:(err)=>{
          console.log(err);
        }

      });

  }

  updateCategory(){

    this.categoryService
      .updateCategory(
        this.categoryId,
        this.category
      )
      .subscribe({

        next:()=>{

          alert(
            'Category Updated Successfully'
          );

          this.router.navigate(
            ['/categories']
          );

        },

        error:(err)=>{
          console.log(err);
          alert('Update Failed');
        }

      });

  }

}
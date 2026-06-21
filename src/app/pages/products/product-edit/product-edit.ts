import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product';
import { CategoryService } from '../../../services/category';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-edit',
  standalone: false,
  templateUrl: './product-edit.html',
  styleUrl: './product-edit.css'
})
export class ProductEdit implements OnInit {

  productId = '';

  categories: any[] = [];

  product: any = {
    name: '',
    description: '',
    price: '',
    image: '',
    category: ''
  };

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {

    this.productId =
      this.route.snapshot.params['id'];

    this.getCategories();
    this.getProduct();

  }

  getCategories() {

    this.categoryService
      .getCategories()
      .subscribe({

        next: (res: any) => {
          this.categories = res;
        },

        error: (err) => {
          console.log(err);
        }

      });

  }

  getProduct() {

    this.productService
      .getProductById(this.productId)
      .subscribe({

        next: (res: any) => {

          this.product = {
            ...res,
            category: res.category?._id || res.category
          };

        },

        error: (err) => {
          console.log(err);
        }

      });

  }

  updateProduct() {

    this.productService
      .updateProduct(
        this.productId,
        this.product
      )
      .subscribe({

        next: () => {

          alert(
            'Product Updated Successfully'
          );

          this.router.navigate(
            ['/products']
          );

        },

        error: (err) => {
          console.log(err);
          alert('Update Failed');
        }

      });

  }

}
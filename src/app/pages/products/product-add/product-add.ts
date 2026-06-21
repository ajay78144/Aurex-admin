import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product';
import { CategoryService } from '../../../services/category';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-add',
  standalone: false,
  templateUrl: './product-add.html',
  styleUrl: './product-add.css'
})
export class ProductAdd implements OnInit {

  product = {
    name: '',
    description: '',
    price: 0,
    image: '',
    category: ''
  };

  categories: any[] = [];

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.categoryService.getCategories().subscribe({
      next: (res: any) => {
        console.log('Categories:', res);
        this.categories = res;
      },
      error: (err) => {
        console.log('Category Error:', err);
      }
    });
  }

  addProduct() {

    if (
      !this.product.name ||
      !this.product.description ||
      !this.product.price ||
      !this.product.image
    ) {
      alert('Please fill all required fields');
      return;
    }

    const productData = {
      name: this.product.name,
      description: this.product.description,
      price: Number(this.product.price),
      image: this.product.image,
      category: this.product.category || null
    };

    console.log('Sending Product:', productData);

    this.productService
      .createProduct(productData)
      .subscribe({

        next: (res) => {

          console.log('Success:', res);

          alert('Product Added Successfully');

          this.router.navigate([
            '/products'
          ]);

        },

        error: (err) => {

          console.log('FULL ERROR:', err);
          console.log('ERROR BODY:', err.error);

          alert(
            err?.error?.message ||
            'Failed to Add Product'
          );

        }

      });

  }

}
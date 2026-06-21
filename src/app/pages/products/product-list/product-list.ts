import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product';

@Component({
  selector: 'app-product-list',
  standalone: false,
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList implements OnInit {

  products:any[] = [];

  constructor(
    private productService: ProductService
  ){}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){

    this.productService
      .getProducts()
      .subscribe({

        next:(res:any)=>{
          this.products = res;
        },

        error:(err)=>{
          console.log(err);
        }

      });

  }

  deleteProduct(id:string){

    if(confirm('Delete Product?')){

      this.productService
        .deleteProduct(id)
        .subscribe({

          next:()=>{
            this.getProducts();
          },

          error:(err)=>{
            console.log(err);
          }

        });

    }

  }

}
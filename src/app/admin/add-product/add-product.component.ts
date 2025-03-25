import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/sharedModule.module';
import { ProductListService } from '../product-list/product-list.service';
import { CommonModule } from '@angular/common';
import { FormsModule, NgModel, Validators } from '@angular/forms';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { NgToastModule } from 'ng-angular-popup';
import { ToastModule } from '@coreui/angular';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-add-product',
  imports: [SharedModule, RouterModule, CommonModule, ReactiveFormsModule, FormsModule, NgToastModule ],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss'
})
export class AddProductComponent implements OnInit {

    products: any;
    limit: number = 20;
    skip: number = 0;
    categories: any[] = [];
    totalProducts: number = 194;
    selectedCategory = '';
    

    constructor(
        private productListService: ProductListService,
        private toast: NgToastService
    ){
      
    }

    newProduct = new FormGroup({
      title: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(255)
      ]),
      description: new FormControl(null, [
        Validators.maxLength(500)
      ]),
      category: new FormControl(null, [
        Validators.required
      ]),
      price: new FormControl(null, [
        Validators.required,
        Validators.min(1),
        Validators.max(1000000),
        Validators.pattern("^[0-9]*$")
      ])
    })

    showSuccess() {
      this.toast.success('Product added', 'Success', 3000);
    }


    ngOnInit() {
      this.loadCategories();
      this.loadProducts();
    }

      selectCategory(categoryName: string) {
        const decodedCategoryName = categoryName
          .toLowerCase()
          .trim();
    
        if (decodedCategoryName === '') {
          this.selectedCategory = '';
        } else {
          this.selectedCategory = decodedCategoryName;
        }
    
        this.loadProducts();
      }

      loadProducts(){
       let apiCall = this.productListService.getProductsInfo();
       apiCall.subscribe((res: any)=>{
        this.products = res.products;
        this.totalProducts = res.total || this.products.length;
       })
      }

      loadCategories() {
        this.productListService.getCategories().subscribe((res: string[]) => {
          this.categories = res;
        });
      }

      onSelected(value: string): void {
        this.selectedCategory = value;
      }

      POST(){
        fetch('https://dummyjson.com/products/add', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            title: this.newProduct.value.title,
            description: this.newProduct.value.description,
            category: this.newProduct.value.category,
            price: this.newProduct.value.price
          })
          
        })
        .then(console.log);
        this.showSuccess();
      }
}

import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/sharedModule.module';
import { ProductListService } from '../product-list/product-list.service';
import { CommonModule } from '@angular/common';
import { FormsModule, NgModel, Validators } from '@angular/forms';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgToastModule, NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-update-product',
  imports: [SharedModule, RouterModule, CommonModule, ReactiveFormsModule, FormsModule, NgToastModule ],
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss'],
})
export class UpdateProductComponent implements OnInit {

    products: any;
    categories: any[] = [];
    totalProducts: number = 194;
    selectedCategory = '';
    selectedProduct: any = null;
    
    constructor(
        private productListService: ProductListService,
        private toast: NgToastService
    ){}

    updateProduct = new FormGroup({
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
      this.toast.success('Product updated', 'Success', 3000);
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
       let apiCall = this.productListService.getAllProducts();
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

      onProductSelect(event: Event){
          const selectedElement = event.target as HTMLSelectElement;
          const selectedID = +selectedElement.value;
          const selected = this.products.find((product: any) => product.id === selectedID);
  
          if(selected){
            this.selectedProduct = selected;
            this.updateProduct.patchValue({
              title: selected.title,
              description: selected.description,
              category: selected.category,
              price: selected.price
            })
          }
        }

      onSubmit(){
        if(this.updateProduct.valid && this.selectedProduct){
          this.PUT(this.selectedProduct);
        }
      }

      PUT(product: any){
        fetch(`https://dummyjson.com/products/${product.id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            title: this.updateProduct.value.title,
            description: this.updateProduct.value.description,
            category: this.updateProduct.value.category,
            price: this.updateProduct.value.price
          })
        })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          this.showSuccess();
        });
      }
}

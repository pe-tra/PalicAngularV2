import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../products/products.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RatingModule } from 'ngx-bootstrap/rating';
import { RouterModule } from '@angular/router';
import { SidebarModule } from '@coreui/angular';
import { NgToastModule } from 'ng-angular-popup';
import { Router, ActivatedRoute } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { TrackByFunction } from '@angular/core';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  imports: [CommonModule,
      RatingModule,
      FormsModule,
      RouterModule,
      SidebarModule,
      NgToastModule,
      ConfirmationPopoverModule],
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  
    products: any;
    limit: number = 20;
    skip: number = 0;
    currentPage: number = 1;
    totalProducts: number = 194;
    pages: (number | string)[] = [];
    inputSearchRes: any[] = [];
    searchText = '';
    selectedCategory = '';
    categories: any[] = [];
    sidebarVisible = false;
    startIndex: number = this.limit * this.currentPage - this.limit;
    endIndex: number = this.startIndex + this.limit;
  
    constructor(
      private productService: ProductService,
      private route: ActivatedRoute,
      private router: Router,
      private toast: NgToastService
    ) {}
  
    showInfo() {
      this.toast.info('No results for current search', 'Information', 3000);
    }

    showSuccess() {
      this.toast.success('Product deleted', 'Success', 3000);
    }
  
    ngOnInit() {
      this.loadCategories();
      this.loadProducts();
  
      this.route.params.subscribe((params) => {
        if (params['category']) {
          this.filterByCategory(params['category']);
        } else {
          this.selectedCategory = '';
          this.loadProducts();
        }
      });
    }
  
    loadCategories() {
      this.productService.getCategories().subscribe((res: string[]) => {
        this.categories = res;
      });
    }
  
    loadProducts() {
      let apiCall;
      if (this.selectedCategory || this.searchText) {
        apiCall = this.productService.getProductsInfo(
          this.limit,
          this.skip,
          this.searchText,
          this.selectedCategory
        );
      } else {
        apiCall = this.productService.getProductsInfo(
          this.limit,
          this.skip
        );
      }
  
      apiCall.subscribe((res: any) => {
        console.log(res);
  
        if (this.selectedCategory) {
          this.products = res.products.filter(
            (product: any) =>
              product.category.toLowerCase().replace(/ /g, '-') ===
              this.selectedCategory.replace(/ /g, '-')
          );
        } else {
          this.products = res.products;
        }
        this.totalProducts = res.total || this.products.length;
        
        this.pages = this.calculatePagination(
          Math.ceil(this.totalProducts / this.limit)
        );
        if(this.products.length < 1){
          console.log('popup')
          this.showInfo();
        }
        this.startIndex = this.limit * this.currentPage - this.limit;
        this.endIndex = this.startIndex + this.limit;
        this.inputSearchRes = this.products.slice(0, this.limit);
        
      });
      
    }
  
    toggleSidebar() {
      this.sidebarVisible = !this.sidebarVisible;
    }
  
    selectCategory(categoryName: string) {
      const decodedCategoryName = categoryName
        .replace(/-/g, ' ')
        .toLowerCase()
        .trim();
  
      if (decodedCategoryName === '') {
        this.selectedCategory = '';
      } else {
        this.selectedCategory = decodedCategoryName;
      }
  
      this.currentPage = 1;
      this.sidebarVisible = false;
      const categoryForUrl = decodedCategoryName.replace(/ /g, '-');
      this.router.navigate(['/product-list/category', categoryForUrl]);
      this.loadProducts();
    }
  
    filterByCategory(category: string) {
      this.selectedCategory = category.toLowerCase();
      this.currentPage = 1;
      this.skip = 0;
      this.productService
        .getProductsByCategory(this.selectedCategory, this.limit, this.skip)
        .subscribe((res: any) => {
          this.products = res.products;
          this.totalProducts = this.products.length;
  
          this.inputSearchRes = this.products.slice(0, this.limit);
        });
        this.pages = this.calculatePagination(
          Math.ceil(this.totalProducts / this.limit)
        );
      this.router.navigate(['/product-list/category', category.toLowerCase()]);
    }
  
    calculatePagination(totalPages: number): (number | string)[] {
      const pagination = [];
      const currentPage = this.currentPage;
  
      pagination.push(1);
  
      if (currentPage > 3) {
        pagination.push('...');
      }
  
      for (
        let i = Math.max(2, currentPage - 1);
        i <= Math.min(totalPages - 1, currentPage + 1);
        i++
      ) {
        pagination.push(i);
      }
  
      if (currentPage < totalPages - 2) {
        pagination.push('...');
      }
  
      if (totalPages > 1) {
        pagination.push(totalPages);
      }
  
      
      this.startIndex = this.limit * this.currentPage - this.limit;
      this.endIndex = this.startIndex + this.limit;
  
      return pagination;
    }
  
    updateProductLimit(newLimit: number) {
      this.limit = newLimit;
      this.skip = 0;
      this.currentPage = 1;
      this.loadProducts();
    }
  
    changePage(page: any): void {
      const totalPages = Math.ceil(this.totalProducts / this.limit);
  
      if (page === 'previous' && this.currentPage > 1) {
        this.currentPage--;
      } else if (page === 'next' && this.currentPage < totalPages) {
        this.currentPage++;
      } else if (typeof page === 'number') {
        this.currentPage = page;
      }
  
      this.skip = (this.currentPage - 1) * this.limit;
      
      this.loadProducts();
    }
  
    Search() {
      this.loadProducts();
    }

    DELETE(product: any){
      fetch(`https://dummyjson.com/products/${product.id}`, {
        method: 'DELETE',
      })
      .then(res => res.json())
      .then(console.log);
      this.showSuccess();
    }

    placements = ['top'];
    popoverTitle = 'Are you sure?';
    popoverMessage = 'Are you really <b>sure</b> you want to delete this product?';
    confirmClicked = false;
    cancelClicked = false;
    trackByValue: TrackByFunction<string> = (index, value) => value;
  }


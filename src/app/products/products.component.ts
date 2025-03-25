import { Component, OnInit } from '@angular/core';
import { ProductService } from './products.service';
import { CommonModule } from '@angular/common';
import { RatingModule } from 'ngx-bootstrap/rating';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ActivatedRoute, Router } from '@angular/router';
import { SidebarModule } from '@coreui/angular';
import { NgToastService } from 'ng-angular-popup';
import { NgToastModule } from 'ng-angular-popup';
import { SharedModule } from '../shared/sharedModule.module';

@Component({
  selector: 'app-products',
  imports: [
    CommonModule,
    RatingModule,
    FormsModule,
    RouterModule,
    SidebarModule,
    NgToastModule,
    SharedModule
  ],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})

export class ProductsComponent implements OnInit {
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
      .toLowerCase()
      .trim();

    if (decodedCategoryName === '') {
      this.selectedCategory = '';
    } else {
      this.selectedCategory = decodedCategoryName;
    }
    
    this.currentPage = 1;
    this.sidebarVisible = false;
    this.productService.changeRoute(categoryName);
   // this.router.navigate(['/products/category', categoryForUrl]);
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
        this.totalProducts = res.total;

        this.inputSearchRes = this.products.slice(0, this.limit);
        const totalPages = Math.ceil(this.totalProducts / this.limit);
        this.calculatePagination(totalPages);
        console.log(totalPages)
      });

    this.productService.changeRoute(category);
  }

  calculatePagination(totalPages: number): (number | string)[] {
    const pagination = [];
    const currentPage = this.currentPage;

    pagination.push(1);

    if (currentPage > 3) {
      pagination.push('...');
    }
    console.log("total pages", totalPages)
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
}

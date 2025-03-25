import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../products.service';
import { RatingModule } from 'ngx-bootstrap/rating';
import { FormsModule } from '@angular/forms';
import { Lightbox } from 'ngx-lightbox';
import { SharedModule } from '../../shared/sharedModule.module';

@Component({
  selector: 'app-productPage',
  imports: [CommonModule, RatingModule, FormsModule, SharedModule],
  templateUrl: './productPage.component.html',
  styleUrls: ['./productPage.component.scss'],
})
export class ProductPage implements OnInit {
  product: any;
  album: any[] = [];

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    private lightbox: Lightbox
  ) {
    this.album = [];
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = +params['id'];
      console.log('Product ID:', id);

      if (!id) {
        console.error('Invalid product ID');
        this.router.navigate(['/products']);
        return;
      }
      this.getProductDetails(id);
    });
  }

  getProductDetails(id: number): void {
    this.productService.getProductById(id).subscribe({
      next: (data) => {
        if (!data) {
          console.error('Product not found');
          this.router.navigate(['/products']);
        }
        this.product = data;
      },
      error: () => {
        console.error('Error fetching product details');
        this.router.navigate(['/products']);
      },
    });
  }

  open(index: number): void {
    for (var src of this.product.images) {
      this.album.push({ src: src });
    }
    console.log(this.album);
    this.lightbox.open(this.album, index);
  }

  close(): void {
    this.lightbox.close();
  }
}
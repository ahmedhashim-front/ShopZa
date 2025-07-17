import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CategoryService } from '../../core/services/Category/category.service';
import { CartService } from '../../core/services/cart.service';
import { IProduct } from '../../shared/interceptors/iproduct';
import { SlugToTitlePipe } from '../../shared/pipes/slug-to-title.pipe';

@Component({
  selector: 'app-category-group-products',
  standalone: true,
  imports: [CommonModule, SlugToTitlePipe],
  templateUrl: './category-group-products.component.html',
})
export class CategoryGroupProductsComponent implements OnInit {
  categorySlug = '';
  loading = true;
  allProducts: IProduct[] = [];

  private readonly cartService = inject(CartService);
  private readonly categoryService = inject(CategoryService);
  private readonly route = inject(ActivatedRoute);
  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.categorySlug = params['cat'] || '';
      console.log('🧩 الكاتيجوري المستلمة:', this.categorySlug); // هنا نتأكد من القيمة

      this.getSpecificCategory(this.categorySlug);
    });
  }

  getSpecificCategory(name: string): void {
    this.loading = true;
    this.categoryService.getCategoryByName(name).subscribe({
      next: (res) => {
        this.allProducts = res.products;
        
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.allProducts = [];
      },
    });
  }

  addToCart(product: IProduct): void {
    this.cartService.addToCart(product);
  }
}

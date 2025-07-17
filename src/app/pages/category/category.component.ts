import { TranslateModule } from '@ngx-translate/core';
import { ICategory } from '../../shared/interceptors/icategory';
import { CategoryService } from './../../core/services/Category/category.service';
import { Component, inject, Input, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [TranslateModule, RouterLink],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css',
})
export class CategoryComponent implements OnInit {
  private readonly categoryService = inject(CategoryService);
  private readonly router = inject(Router); // ✅ أضفنا الـ Router هنا

  category: ICategory[] = [];
  @Input() previewOnly = false;

  categoryGroups = [
    {
      title: 'Fashion',
      slug: 'fashion',
      categories: ['tops', 'sunglasses', 'womens-jewellery', 'womens-bags'],
    },
    {
      title: 'Women',
      slug: 'womens',
      categories: ['womens-dresses', 'womens-shoes', 'womens-watches'],
    },
    {
      title: 'Men',
      slug: 'mens',
      categories: ['mens-shirts', 'mens-shoes'],
    },
    {
      title: 'Electronics',
      slug: 'electronics',
      categories: ['smartphones', 'laptops'],
    },
    {
      title: 'Beauty',
      slug: 'beauty',
      categories: ['beauty', 'fragrances', 'skin-care'],
    },
    {
      title: 'Home & Decor',
      slug: 'home',
      categories: ['furniture', 'home-decoration', 'kitchen-accessories'],
    },
  ];

  ngOnInit(): void {
    this.getCategory();
  }

  getCategory(): void {
    this.categoryService.getCategory().subscribe({
      next: (res) => {
        this.category = res;
      },
    });
  }

  goToCategory(cat: string): void {
    this.router.navigate(['/category', cat], {
      state: { fromCategoryList: true },
    });
  }
}

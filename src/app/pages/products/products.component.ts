import { Component, inject, OnInit } from '@angular/core';
import { ProductsService } from '../../core/guards/interceptors/services/products/products.service';
import { IProduct } from '../../shared/interceptors/iproduct';
import { CartService } from '../../core/services/cart.service';
import { RouterLink } from '@angular/router';

@Component({
  imports: [],
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  products: IProduct[] = [];

  private readonly productsService = inject(ProductsService);
  private readonly cartService = inject(CartService); // Inject Cart Service
  getAllProduct(): void {
    this.productsService.getAllProduct().subscribe({
      next: (res) => {
        this.products = res.products;
        // console.log(this.products);
      },
      error(err) {
        console.log(err);
      },
    });
  }
  ngOnInit(): void {
    this.getAllProduct();
  }

  addToCart(product: IProduct) {
    this.cartService.addToCart(product);
  }
}

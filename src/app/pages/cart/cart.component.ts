import { Component, OnInit, inject } from '@angular/core';
import { CartService } from '../../core/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];

  private readonly cartService = inject(CartService);

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
  }

  removeItem(index: number): void {
    this.cartService.removeFromCart(index);
    this.cartItems = this.cartService.getCartItems(); // تحديث القائمة بعد الحذف
  }

  clearCart(): void {
    this.cartService.clearCart();
    this.cartItems = [];
  }

  getTotal(): number {
    return this.cartItems.reduce((total, item) => total + item.price, 0);
  }
}

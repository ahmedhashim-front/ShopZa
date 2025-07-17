import { Injectable } from '@angular/core';
import { IProduct } from '../../shared/interceptors/iproduct';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems: IProduct[] = [];

  constructor() {}

  addToCart(product: IProduct) {
    this.cartItems.push(product);
    console.log('تمت إضافة المنتج للسلة:', product);
  }

  getCartItems() {
    return this.cartItems;
  }

  removeFromCart(index: number) {
    this.cartItems.splice(index, 1);
  }

  clearCart() {
    this.cartItems = [];
  }
}

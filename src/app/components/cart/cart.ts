import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartService } from '../../services/cart-service';

@Component({
  selector: 'app-cart',
  imports: [RouterLink],
  templateUrl: './cart.html',
  styleUrl: './cart.scss',
})
export class Cart {
  public cartService = inject(CartService);

  public selectedItems = this.cartService.selectedItems;
  public uniqueItems = this.cartService.uniqueItems;
  public statusCart = this.cartService.statusCart;

  @ViewChild('cart') cartElement!: ElementRef<HTMLDivElement>;

  clearCart() {
    this.cartService.clearCart();
  }

  closeCart() {
    this.cartService.toggleCart();
  }
}
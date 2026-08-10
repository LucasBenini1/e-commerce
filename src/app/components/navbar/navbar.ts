import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart-service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  public cartService = inject(CartService);

  openCart(){
    this.cartService.toggleCart();
  }
}

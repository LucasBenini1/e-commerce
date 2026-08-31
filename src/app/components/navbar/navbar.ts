import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart-service';
import { RouterLink } from '@angular/router';
import { LucideAngularModule, House, Info, Mail, ShoppingCart } from 'lucide-angular';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, LucideAngularModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  public cartService = inject(CartService);

  readonly House = House;
  readonly Info = Info;
  readonly Mail = Mail;
  readonly ShoppingCart = ShoppingCart;

  openCart(){
    this.cartService.toggleCart();
  }
}
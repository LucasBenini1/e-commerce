import { Component, computed, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './pages/home/home';
import { Details } from './pages/details/details';
import { Navbar } from './components/navbar/navbar';
import { Cart } from './components/cart/cart';
import { CartService } from './services/cart-service';
import { Toastr } from './components/toastr/toastr';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home, Details, Navbar, Cart, Toastr],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('projetoEstud');
  public cartService = inject(CartService);
}

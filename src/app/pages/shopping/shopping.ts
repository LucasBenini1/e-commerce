import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CartService } from '../../services/cart-service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-shopping',
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './shopping.html',
  styleUrl: './shopping.scss',
})
export class Shopping {
  private fb = inject(FormBuilder);
  public cartService = inject(CartService);
  
  checkoutForm: FormGroup;

  constructor() {
    this.checkoutForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^\d{10,11}$/)]],
      address: ['', [Validators.required, Validators.minLength(10)]],
      city: ['', [Validators.required]],
      zipCode: ['', [Validators.required, Validators.pattern(/^\d{5}-?\d{3}$/)]],
    });
  }

  getTotalPrice(): number {
    return this.cartService.selectedItems().reduce((sum, item) => sum + item.price, 0);
  }

  onSubmit(): void {
    if (this.checkoutForm.valid) {
      console.log('Pedido realizado:', {
        customer: this.checkoutForm.value,
        items: this.cartService.selectedItems(),
        total: this.getTotalPrice()
      });
      alert('Pedido realizado com sucesso!');
      this.cartService.clearCart();
      this.checkoutForm.reset();
    }
  }
}

import { Component, inject, computed, OnInit, signal } from '@angular/core';
import { ItemsFetchService } from '../../services/items-fetch-service';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../../services/cart-service';
import { ToastrService } from '../../services/toastr-service';
import { Item } from '../../interfaces/item.interface';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.html',
  styleUrl: './details.scss',
})
export class Details implements OnInit {
  private itemFetch = inject(ItemsFetchService);
  private route = inject(ActivatedRoute);
  public itemId = signal<string | null>(null);
  public cartService = inject(CartService);
  public toastrService = inject(ToastrService);
  public router = inject(Router);


  public itemFiltrado = computed<Item | null>(() => {
    const id = this.itemId();
    const lista = this.itemFetch.data();

    if (!id || lista.length === 0) return null;
    return lista.find(item => item.id === Number(id)) || null;
  });

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.itemId.set(id);
    if (this.itemFetch.data().length === 0) {
      this.itemFetch.fetchItems(); 
    }
  }

  adicionarAoCarrinho(item: Item): void {
    this.cartService.addItem(item);
    localStorage.setItem('cartItems', 
      JSON.stringify([...JSON.parse(localStorage.getItem('cartItems') || '[]'), ...this.cartService.selectedItems()])
    );
    this.toastrService.show(true);
  }
}
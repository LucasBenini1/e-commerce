import { Injectable, computed, signal } from '@angular/core';
import { Item } from '../interfaces/item.interface';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private readonly storageKey = 'cartItems';

  public selectedItems = signal<Item[]>(this.loadItems());
  public statusCart = signal(false);

  public uniqueItems = computed(() => {
    return [...new Set(this.selectedItems().map(item => item.name))];
  });

  private loadItems(): Item[] {
    const savedItems = localStorage.getItem(this.storageKey);
    return savedItems ? (JSON.parse(savedItems) as Item[]) : [];
  }

  addItem(item: Item): void {
    this.selectedItems.update(items => {
      const updatedItems = [...items, item];
      localStorage.setItem(this.storageKey, JSON.stringify(updatedItems));
      return updatedItems;
    });
  }

  removeItem(item: Item): void {
    this.selectedItems.update(items => {
      const updatedItems = items.filter(i => i.id !== item.id);
      localStorage.setItem(this.storageKey, JSON.stringify(updatedItems));
      return updatedItems;
    });
  }

  clearCart(): void {
    this.selectedItems.set([]);
    localStorage.removeItem(this.storageKey);
  }

  toggleCart(): void {
    this.statusCart.update(status => !status);
  }
}
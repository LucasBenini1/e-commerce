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
    const items = this.selectedItems();

    const groupedItems = new Map<number, { item: Item; quantity: number }>();

    items.forEach(item => {
      const existingItem = groupedItems.get(item.id);

      if (existingItem) {
        existingItem.quantity++;
      } else {
        groupedItems.set(item.id, {
          item,
          quantity: 1,
        });
      }
    });

    return Array.from(groupedItems.values());
  });

  private loadItems(): Item[] {
    const savedItems = localStorage.getItem(this.storageKey);

    return savedItems ? (JSON.parse(savedItems) as Item[]): [];
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
      const index = items.findIndex(i => i.id === item.id);

      if (index === -1) return items;

      const updatedItems = [...items];
      updatedItems.splice(index, 1);

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
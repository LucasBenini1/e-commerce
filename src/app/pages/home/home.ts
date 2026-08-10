import { Component, inject, OnInit, computed, WritableSignal, signal } from '@angular/core';
import { ItemsFetchService } from '../../services/items-fetch-service';
import { Card } from '../../components/card/card';
import { Router } from '@angular/router';
import { Item } from '../../interfaces/item.interface';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Card],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  private itemFetch = inject(ItemsFetchService);
  private router = inject(Router);
  public data = computed(() => this.itemFetch.data());  
  public isLoading = this.itemFetch.isLoading;
  public filter: WritableSignal<string> = signal('');
  public categories = computed(() => {
    const allCategories = this.data().map((item: Item) => item.category);
    return [...new Set(allCategories)];
  });

  filteredItems(searchTerm: string): Item[] {
    const filteredItems = this.data().filter((item: Item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return filteredItems.length > 0 ? filteredItems : this.data();
  }

  ngOnInit() {
    this.itemFetch.fetchItems();
  }

  handleItemClick(item: Item): void {
    this.router.navigate(['/details', item.id]);
  }
}
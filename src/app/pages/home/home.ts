import { Component, inject, OnInit } from '@angular/core';
import { ItemsFetchService } from '../../services/items-fetch-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  private itemFetch = inject(ItemsFetchService);
  private router = inject(Router);
  public data = this.itemFetch.data; 
  public isLoading = this.itemFetch.isLoading;

  ngOnInit() {
    this.itemFetch.fetchItems(); 
  }

  handleItemClick(item: any) {
    this.router.navigate(['/details', item.id]);
  }
}
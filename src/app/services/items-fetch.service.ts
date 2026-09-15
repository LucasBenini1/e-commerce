import { Injectable, signal, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item, ItemsResponse } from '../interfaces/item.interface';

@Injectable({
  providedIn: 'root',
})
export class ItemsFetchService {
  private http = inject(HttpClient);
  private apiUrl = 'items.json';
  private _isLoading = signal<boolean>(false);
  private _data = signal<Item[]>([]);
  public isLoading = this._isLoading.asReadonly();
  public data = this._data.asReadonly();

  fetchItems(){
    if (this.data().length > 0 || this._isLoading()) {
      console.log('Dados já carregados ou carregamento em andamento');
      return; 
    }

    this._isLoading.set(true);
    
    this.http.get<ItemsResponse>(this.apiUrl).subscribe({
      next: (response) => {
        this._data.set(response.items);
      },
      error: (err) => {
        console.error('Erro ao buscar itens', err);
        this._isLoading.set(false);
      },
      complete: () => {
        this._isLoading.set(false);
      }
    });
  }
}
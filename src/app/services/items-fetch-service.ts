import { Injectable, signal, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ItemsFetchService {
  private http = inject(HttpClient);
  private apiUrl = 'items.json';
  private _isLoading = signal<boolean>(false);
  private _data = signal<any[]>([]);
  public isLoading = this._isLoading.asReadonly();
  public data = this._data.asReadonly();

  fetchItems(): void {
    this._isLoading.set(true);
    
    this.http.get<{ items: any[] }>(this.apiUrl).subscribe({
      next: (response) => {
        this._data.set(response.items);
      },
      error: (err) => {
        console.error('Erro ao buscar itens', err);
      },
      complete: () => {
        this._isLoading.set(false);
      }
    });
  }
}
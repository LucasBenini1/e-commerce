import { Component, inject } from '@angular/core';
import { ItemsFetchService } from '../../services/items-fetch-service';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.html',
  styleUrl: './details.scss',
})
export class Details {
  private itemFetch = inject(ItemsFetchService);

  
}

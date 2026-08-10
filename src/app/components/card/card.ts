import { Component, Input } from '@angular/core';
import { Item } from '../../interfaces/item.interface';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.scss',
})
export class Card {
  @Input() item!: Item;
}
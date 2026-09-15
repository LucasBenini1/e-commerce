import { Component, Input } from '@angular/core';
import { Item } from '../../interfaces/item.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  imports: [CommonModule],
  templateUrl: './card.html',
  styleUrl: './card.scss',
})
export class Card {
  @Input() item!: Item;
}
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Stat {
  value: string;
  label: string;
}

interface ValueCard {
  number: string;
  title: string;
  description: string;
  gridClass: string;
}

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  stats: Stat[] = [
    { value: '100%', label: 'Algodão Orgânico Certificado' },
    { value: '0%', label: 'Descarte Plástico na Cadeia' },
    { value: '+15k', label: 'Peças Entregues pelo Brasil' },
    { value: '2019', label: 'Fundação em São Paulo' },
  ];

  values: ValueCard[] = [
    {
      number: '01',
      title: 'Ateliê & Atemporalidade',
      description:
        'Desenvolvemos modelagens que ignoram o ciclo descartável do fast-fashion. Cada peça é pensada para durar décadas mantendo caimento impecável.',
      gridClass: 'card-featured',
    },
    {
      number: '02',
      title: 'Transparência Radical',
      description: 'Rastreabilidade total da matéria-prima até a costura final.',
      gridClass: 'card-tall',
    },
    {
      number: '03',
      title: 'Produção Local',
      description: 'Valorização de artesãs e oficinas familiares regionais.',
      gridClass: 'card-wide',
    },
  ];
}
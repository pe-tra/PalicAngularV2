import { Component } from '@angular/core';
import { SharedModule } from '../shared/sharedModule.module';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-pocetna-b',
  imports: [SharedModule],
  templateUrl: './pocetna-b.component.html',
  styleUrl: './pocetna-b.component.scss'
})
export class PocetnaBComponent {
  album: any[] = [
    {
      src: 'assets/jezeroZalazak1.webp'
    },
    {
      src: 'assets/parkTrka13.webp'
    },
    {
      src: 'assets/park1.webp'
    }
  ];

  constructor(private lightbox: Lightbox) {}

  openLightbox(index: number): void {
    this.lightbox.open(this.album, index);
  }

  closeLightbox(): void {
    this.lightbox.close();
  }
}

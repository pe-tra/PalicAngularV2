import { Component } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';
import { SharedModule } from '../shared/sharedModule.module';

@Component({
    selector: 'app-ribljaCarda',
    imports: [SharedModule],
    templateUrl: './ribljaCarda.component.html',
    styleUrl: './pojedinacnoRestorani.component.scss'
})

export class RibljaCardaComponent {
    album: any[] = [
    {
      src: 'assets/rCarda3.webp'
    },
    {
      src: 'assets/rCarda8.webp'
    },
    {
      src: 'assets/rCarda1.webp'
    },
    {
      src: 'assets/rCarda4.webp'
    },
    {
      src: 'assets/rCarda5.webp'
    },
    {
      src: 'assets/rCarda7.webp'
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
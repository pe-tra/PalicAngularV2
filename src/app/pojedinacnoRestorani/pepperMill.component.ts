import { Component } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';
import { SharedModule } from '../shared/sharedModule.module';

@Component({
    selector: 'app-pepperMill',
    imports: [SharedModule],
    templateUrl: './pepperMill.component.html',
    styleUrl: './pojedinacnoRestorani.component.scss'
})

export class PepperMillaComponent {
    album: any[] = [
        {
          src: 'assets/pmProstorija1.webp'
        },
        {
          src: 'assets/pmProstorija10.webp'
        },
        {
          src: 'assets/pmHrana3.webp'
        },
        {
          src: 'assets/pmDvoriste5.webp'
        },
        {
          src: 'assets/pmProstorija11.webp'
        },
        {
          src: 'assets/pmProstorija16.webp'
        },
        {
          src: 'assets/pmDvoriste14.webp'
        },
        {
          src: 'assets/pmDvoriste2.webp'
        },
        {
          src: 'assets/pmHrana5.webp'
        },
        {
          src: 'assets/pmProstorija2.webp'
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
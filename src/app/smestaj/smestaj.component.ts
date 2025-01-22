import { Component } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';
import { SharedModule } from '../shared/sharedModule.module';

@Component({
    selector: 'app-smestaj',
    imports: [SharedModule],
    templateUrl: './smestaj.component.html',
    styleUrl: './smestaj.component.scss'
})

export class SmestajComponent {
    album: any[] = [
        {
          src: 'assets/vilaPalic.webp'
        },
        {
          src: 'assets/jelenSalas6.webp'
        },
        {
          src: 'assets/navigator1.webp'
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
import { Component } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';
import { SharedModule } from '../shared/sharedModule.module';

@Component({
    selector: 'app-corsaroUno',
    imports: [SharedModule],
    templateUrl: './corsaroUno.component.html',
    styleUrl: './pojedinacnoRestorani.component.scss'
})

export class CorsaroUnoComponent {
    album: any[] = [
        {
          src: 'assets/corsaro2.webp'
        },
        {
          src: 'assets/corsaro5.webp'
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
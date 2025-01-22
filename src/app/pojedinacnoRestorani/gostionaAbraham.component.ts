import { Component } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';
import { SharedModule } from '../shared/sharedModule.module';

@Component({
    selector: 'app-gostionaAbraham',
    imports: [SharedModule],
    templateUrl: './gostionaAbraham.component.html',
    styleUrl: './pojedinacnoRestorani.component.scss'
})

export class GostionaAbrahamComponent {
    album: any[] = [
        {
          src: 'assets/abraham5.webp'
        },
        {
          src: 'assets/abraham6.webp'
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
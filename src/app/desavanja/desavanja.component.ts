import { Component } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';
import { SharedModule } from '../shared/sharedModule.module';

@Component({
    selector: 'app-desavanja',
    imports: [SharedModule],
    templateUrl: './desavanja.component.html',
    styleUrl: './desavanja.component.scss'
})

export class DesavanjaComponent {
    album: any[] = [
        {
          src: 'assets/parkTrka10.webp'
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
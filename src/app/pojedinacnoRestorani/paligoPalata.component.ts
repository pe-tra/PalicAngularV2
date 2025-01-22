import { Component } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';
import { SharedModule } from '../shared/sharedModule.module';

@Component({
    selector: 'app-paligoPalata',
    imports: [SharedModule],
    templateUrl: './paligoPalata.component.html',
    styleUrl: './pojedinacnoRestorani.component.scss'
})

export class PaligoPalataComponent {
    album: any[] = [
        {
          src: 'assets/paligo5.webp'
        },
        {
          src: 'assets/paligo1.webp'
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
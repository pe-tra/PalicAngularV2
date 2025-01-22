import { Component } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';
import { SharedModule } from '../shared/sharedModule.module';

@Component({
    selector: 'app-imageGallery',
    imports: [SharedModule],
    templateUrl: './imageGallery.component.html',
    styleUrl: './imageGallery.component.scss'
})

export class ImageGalleryComponent {
    album: any[] = [
        {
          src: 'assets/gallery2.webp'
        },
        {
            src: 'assets/gallery1.webp'
        },
        {
            src: 'assets/gallery3.webp'
        },
        {
            src: 'assets/gallery4.webp'
        },
        {
            src: 'assets/gallery5.webp'
        },
        {
            src: 'assets/gallery7.webp'
        },
        {
            src: 'assets/gallery8.webp'
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
import { Component } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';
import { SharedModule } from '../shared/sharedModule.module';
import { GalleryComponent } from '../gallery/gallery.component';

@Component({
    selector: 'app-zooVrt',
    imports: [SharedModule, GalleryComponent],
    templateUrl: './zooVrt.component.html',
    styleUrl: './zooVrt.component.scss'
})

export class ZooVrtComponent {
    Title = 'Palic Zoo Vrt';
    album: any[] = [
        {
          src: 'assets/zooVrt3.webp'
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
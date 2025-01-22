import { Component } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';
import { SharedModule } from '../shared/sharedModule.module';

@Component({
    selector: 'app-blog',
    imports: [SharedModule],
    templateUrl: './blog.component.html',
    styleUrl: './blog.component.scss'
})

export class BlogComponent {
    
    album: any[] = [
    {
      src: 'assets/prviMaj1.webp'
    },
    {
      src: 'assets/prviMaj2.webp'
    },
    {
      src: 'assets/parkPas4.webp'
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
import { Component } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery',
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {
  album: any[] = [];

  constructor(private lightbox: Lightbox) {
    this.album = [
      {
        src: 'assets/animals3.webp',
        thumb: 'assets/animals3.webp'
      },
      {
        src: 'assets/animals5.webp',
        thumb: 'assets/animals5.webp'
      },
      {
        src: 'assets/animals8.webp',
        thumb: 'assets/animals8.webp'
      },
      {
        src: 'assets/animals11.webp',
        thumb: 'assets/animals11.webp'
      },
      {
        src: 'assets/animals12.webp',
        thumb: 'assets/animals12.webp'
      },
      {
        src: 'assets/animals13.webp',
        thumb: 'assets/animals13.webp'
      },
      {
        src: 'assets/animals14.webp',
        thumb: 'assets/animals14.webp'
      },
      {
        src: 'assets/animals15.webp',
        thumb: 'assets/animals15.webp'
      },
      {
        src: 'assets/animals16.webp',
        thumb: 'assets/animals16.webp'
      },
      {
        src: 'assets/animals17.webp',
        thumb: 'assets/animals17.webp'
      },
      {
        src: 'assets/animals19.webp',
        thumb: 'assets/animals19.webp'
      },
      {
        src: 'assets/animals20.webp',
        thumb: 'assets/animals20.webp'
      },
      {
        src: 'assets/animals21.webp',
        thumb: 'assets/animals21.webp'
      },
      {
        src: 'assets/animals22.webp',
        thumb: 'assets/animals22.webp'
      },
      {
        src: 'assets/animals4.webp',
        thumb: 'assets/animals4.webp'
      }
    ];
  }

  open(index: number): void {
    this.lightbox.open(this.album, index);
  }

  close(): void {
    this.lightbox.close();
  }
}

import { Component } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';
import { SharedModule } from '../shared/sharedModule.module';
import { GalleryComponent } from '../gallery/gallery.component';
import { LanguageService } from '../services/language.service';
import { TranslateModule } from '@ngx-translate/core';
import { DomSanitizer } from '@angular/platform-browser';
import { BaseComponent } from '../shared/base.component';

@Component({
    selector: 'app-zoo',
    imports: [SharedModule, GalleryComponent, TranslateModule],
    templateUrl: './zoo.component.html',
    styleUrl: './zoo.component.scss'
})

export class ZooComponent extends BaseComponent {
    Title = 'Palic Zoo Vrt';
    album: any[] = [
        {
          src: 'assets/zooVrt3.webp'
        }
      ];

      constructor(private lightbox: Lightbox, languageService: LanguageService, sanitizer: DomSanitizer) {
        super(languageService, sanitizer);
      }
    
      openLightbox(index: number): void {
        this.lightbox.open(this.album, index);
      }
    
      closeLightbox(): void {
        this.lightbox.close();
      }
}
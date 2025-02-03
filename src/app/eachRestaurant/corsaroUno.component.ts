import { Component } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';
import { SharedModule } from '../shared/sharedModule.module';
import { LanguageService } from '../services/language.service';
import { TranslateModule } from '@ngx-translate/core';
import { DomSanitizer } from '@angular/platform-browser';
import { BaseComponent } from '../shared/base.component';

@Component({
    selector: 'app-corsaroUno',
    imports: [SharedModule, TranslateModule],
    templateUrl: './corsaroUno.component.html',
    styleUrl: './eachRestaurant.component.scss'
})

export class CorsaroUnoComponent extends BaseComponent {
    album: any[] = [
        {
          src: 'assets/corsaro2.webp'
        },
        {
          src: 'assets/corsaro5.webp'
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
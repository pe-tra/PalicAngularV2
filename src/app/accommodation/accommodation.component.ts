import { Component } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';
import { SharedModule } from '../shared/sharedModule.module';
import { LanguageService } from '../services/language.service';
import { TranslateModule } from '@ngx-translate/core';
import { DomSanitizer } from '@angular/platform-browser';
import { BaseComponent } from '../shared/base.component';

@Component({
    selector: 'app-accommodation',
    imports: [SharedModule, TranslateModule],
    templateUrl: './accommodation.component.html',
    styleUrl: './accommodation.component.scss'
})

export class AccommodationComponent extends BaseComponent {
    album: any[] = [
        {
          src: 'assets/vilaPalic.webp'
        },
        {
          src: 'assets/jelenSalas6.webp'
        },
        {
          src: 'assets/navigator1.webp'
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
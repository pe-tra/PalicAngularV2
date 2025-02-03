import { Component } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';
import { LanguageService } from '../services/language.service';
import { TranslateModule } from '@ngx-translate/core';
import { DomSanitizer } from '@angular/platform-browser';
import { SharedModule } from '../shared/sharedModule.module';
import { BaseComponent } from '../shared/base.component';

@Component({
    selector: 'app-paligoPalata',
    imports: [SharedModule, TranslateModule],
    templateUrl: './paligoPalata.component.html',
    styleUrl: './eachRestaurant.component.scss'
})

export class PaligoPalataComponent extends BaseComponent {
    album: any[] = [
        {
          src: 'assets/paligo5.webp'
        },
        {
          src: 'assets/paligo1.webp'
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
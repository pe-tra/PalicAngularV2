import { Component } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';
import { LanguageService } from '../services/language.service';
import { TranslateModule } from '@ngx-translate/core';
import { DomSanitizer } from '@angular/platform-browser';
import { SharedModule } from '../shared/sharedModule.module';
import { BaseComponent } from '../shared/base.component';

@Component({
    selector: 'app-pepperMill',
    imports: [SharedModule, TranslateModule],
    templateUrl: './pepperMill.component.html',
    styleUrl: './eachRestaurant.component.scss'
})

export class PepperMillaComponent extends BaseComponent {
    album: any[] = [
        {
          src: 'assets/pmProstorija1.webp'
        },
        {
          src: 'assets/pmProstorija10.webp'
        },
        {
          src: 'assets/pmHrana3.webp'
        },
        {
          src: 'assets/pmDvoriste5.webp'
        },
        {
          src: 'assets/pmProstorija11.webp'
        },
        {
          src: 'assets/pmProstorija16.webp'
        },
        {
          src: 'assets/pmDvoriste14.webp'
        },
        {
          src: 'assets/pmDvoriste2.webp'
        },
        {
          src: 'assets/pmHrana5.webp'
        },
        {
          src: 'assets/pmProstorija2.webp'
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
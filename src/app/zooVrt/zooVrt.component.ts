import { Component } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';
import { SharedModule } from '../shared/sharedModule.module';
import { GalleryComponent } from '../gallery/gallery.component';
import { LanguageService } from '../services/language.service';
import { TranslateModule } from '@ngx-translate/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
    selector: 'app-zooVrt',
    imports: [SharedModule, GalleryComponent, TranslateModule],
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

      translatedText: SafeHtml = '';
    
      constructor(private lightbox: Lightbox, private languageService: LanguageService, private sanitizer: DomSanitizer) {
        this.updateTranslation();
        this.languageService.getTranslation('quoteText').subscribe(() => this.updateTranslation());
      }
    
      openLightbox(index: number): void {
        this.lightbox.open(this.album, index);
      }
    
      closeLightbox(): void {
        this.lightbox.close();
      }

      changeLanguage(lang: string) {
        this.languageService.changeLanguage(lang);
        this.updateTranslation();
      }
    
      private updateTranslation() {
        this.languageService.getTranslation('quoteText').subscribe((translated: string) => {
            this.translatedText = this.sanitizer.bypassSecurityTrustHtml(translated);
        });
      }
}
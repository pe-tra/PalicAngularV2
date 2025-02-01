import { Component } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';
import { SharedModule } from '../shared/sharedModule.module';
import { LanguageService } from '../services/language.service';
import { TranslateModule } from '@ngx-translate/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
    selector: 'app-blog',
    imports: [SharedModule, TranslateModule],
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
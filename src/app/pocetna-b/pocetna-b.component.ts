import { Component } from '@angular/core';
import { SharedModule } from '../shared/sharedModule.module';
import { Lightbox } from 'ngx-lightbox';
import { LanguageService } from '../services/language.service';
import { TranslateModule } from '@ngx-translate/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-pocetna-b',
  imports: [SharedModule, TranslateModule],
  templateUrl: './pocetna-b.component.html',
  styleUrl: './pocetna-b.component.scss'
})
export class PocetnaBComponent {
  album: any[] = [
    {
      src: 'assets/jezeroZalazak1.webp'
    },
    {
      src: 'assets/parkTrka13.webp'
    },
    {
      src: 'assets/park1.webp'
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

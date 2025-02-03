import { Component } from '@angular/core';
import { LanguageService } from '../services/language.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  template: ''
})
export class BaseComponent {
  translatedText: SafeHtml = '';

  constructor(protected languageService: LanguageService, protected sanitizer: DomSanitizer) {
    this.updateTranslation();
    this.languageService.getTranslation('quoteText').subscribe(() => this.updateTranslation());
  }

  changeLanguage(lang: string) {
    this.languageService.changeLanguage(lang);
    this.updateTranslation();
  }

  protected updateTranslation() {
    this.languageService.getTranslation('quoteText').subscribe((translated: string) => {
      this.translatedText = this.sanitizer.bypassSecurityTrustHtml(translated);
    });
  }
}
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/sharedModule.module';
import { LanguageService } from '../services/language.service';
import { TranslateModule } from '@ngx-translate/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
    selector: 'app-vinarije',
    imports: [SharedModule, RouterModule, TranslateModule],
    templateUrl: './vinarije.component.html',
    styleUrl: './vinarije.component.scss'
})

export class VinarijeComponent {
  translatedText: SafeHtml = '';

    constructor(private languageService: LanguageService, private sanitizer: DomSanitizer) {
            this.updateTranslation();
            this.languageService.getTranslation('quoteText').subscribe(() => this.updateTranslation());
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
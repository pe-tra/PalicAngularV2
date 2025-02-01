import { Component } from '@angular/core';
import { LanguageService } from '../services/language.service';
import { TranslateModule } from '@ngx-translate/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { SharedModule } from '../shared/sharedModule.module';

@Component({
    selector: 'app-restorani',
    imports: [SharedModule, TranslateModule],
    templateUrl: './restorani.component.html',
    styleUrl: './restorani.component.scss'
})

export class RestoraniComponent {
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
import { Component } from '@angular/core';
import { LanguageService } from '../services/language.service';
import { TranslateModule } from '@ngx-translate/core';
import { DomSanitizer } from '@angular/platform-browser';
import { BaseComponent } from '../shared/base.component';
import { SharedModule } from '../shared/sharedModule.module';

@Component({
    selector: 'app-vinarijaP',
    imports: [SharedModule, TranslateModule],
    templateUrl: './vinarijaP.component.html',
    styleUrl: './eachWinerie.component.scss'
})

export class VinarijaPComponent extends BaseComponent {
    constructor(languageService: LanguageService, sanitizer: DomSanitizer) {
            super(languageService, sanitizer);
          }
}
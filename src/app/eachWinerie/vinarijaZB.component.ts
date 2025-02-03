import { Component } from '@angular/core';
import { LanguageService } from '../services/language.service';
import { TranslateModule } from '@ngx-translate/core';
import { DomSanitizer } from '@angular/platform-browser';
import { BaseComponent } from '../shared/base.component';
import { SharedModule } from '../shared/sharedModule.module';

@Component({
    selector: 'app-vinarijaZB',
    imports: [SharedModule, TranslateModule],
    templateUrl: './vinarijaZB.component.html',
    styleUrl: './eachWinerie.component.scss'
})

export class VinarijaZBComponent extends BaseComponent {
    constructor(languageService: LanguageService, sanitizer: DomSanitizer) {
            super(languageService, sanitizer);
          }}
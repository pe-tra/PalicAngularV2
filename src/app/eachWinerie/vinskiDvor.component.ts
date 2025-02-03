import { Component } from '@angular/core';
import { LanguageService } from '../services/language.service';
import { TranslateModule } from '@ngx-translate/core';
import { DomSanitizer } from '@angular/platform-browser';
import { BaseComponent } from '../shared/base.component';
import { SharedModule } from '../shared/sharedModule.module';

@Component({
    selector: 'app-vinskiDvor',
    imports: [SharedModule, TranslateModule],
    templateUrl: './vinskiDvor.component.html',
    styleUrl: './eachWinerie.component.scss'
})

export class VinskiDvorComponent extends BaseComponent {
    constructor(languageService: LanguageService, sanitizer: DomSanitizer) {
            super(languageService, sanitizer);
          }}
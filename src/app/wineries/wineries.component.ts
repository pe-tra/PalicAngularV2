import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/sharedModule.module';
import { LanguageService } from '../services/language.service';
import { TranslateModule } from '@ngx-translate/core';
import { DomSanitizer } from '@angular/platform-browser';
import { BaseComponent } from '../shared/base.component';

@Component({
    selector: 'app-wineries',
    imports: [SharedModule, RouterModule, TranslateModule],
    templateUrl: './wineries.component.html',
    styleUrl: './wineries.component.scss'
})

export class WineriesComponent extends BaseComponent {

    constructor(languageService: LanguageService, sanitizer: DomSanitizer) {
          super(languageService, sanitizer);
          }
}
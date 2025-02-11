import { Component } from '@angular/core';
import { LanguageService } from '../services/language.service';
import { TranslateModule } from '@ngx-translate/core';
import { DomSanitizer } from '@angular/platform-browser';
import { SharedModule } from '../shared/sharedModule.module';
import { BaseComponent } from '../shared/base.component';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-restaurants',
    imports: [SharedModule, TranslateModule, RouterModule],
    templateUrl: './restaurants.component.html',
    styleUrl: './restaurants.component.scss'
})

export class RestaurantsComponent extends BaseComponent {
  constructor(languageService: LanguageService, sanitizer: DomSanitizer) {
    super(languageService, sanitizer);
  }
}
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/sharedModule.module';
import { LanguageService } from '../services/language.service';

@Component({
    selector: 'app-vinarije',
    imports: [SharedModule, RouterModule],
    templateUrl: './vinarije.component.html',
    styleUrl: './vinarije.component.scss'
})

export class VinarijeComponent {
    constructor(private languageService: LanguageService) {}

  changeLanguage(lang: string) {
    this.languageService.changeLanguage(lang);
  }
}
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  constructor(private translate: TranslateService) {
    this.translate.addLangs(['sr', 'en']);
    this.translate.setDefaultLang('sr');
    this.translate.use(localStorage.getItem('language') || 'sr');
  }

  changeLanguage(lang: string) {
    this.translate.use(lang);
    localStorage.setItem('language', lang);
  }

  getTranslation(key: string): Observable<string> {
    return this.translate.get(key);
  }
}

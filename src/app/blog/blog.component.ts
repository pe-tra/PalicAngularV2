import { Component } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';
import { SharedModule } from '../shared/sharedModule.module';
import { LanguageService } from '../services/language.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-blog',
    imports: [SharedModule, TranslateModule],
    templateUrl: './blog.component.html',
    styleUrl: './blog.component.scss'
})

export class BlogComponent {
    
    album: any[] = [
    {
      src: 'assets/prviMaj1.webp'
    },
    {
      src: 'assets/prviMaj2.webp'
    },
    {
      src: 'assets/parkPas4.webp'
    }
  ];

  constructor(private lightbox: Lightbox, private languageService: LanguageService) {}

  openLightbox(index: number): void {
    this.lightbox.open(this.album, index);
  }

  closeLightbox(): void {
    this.lightbox.close();
  }

  changeLanguage(lang: string) {
    this.languageService.changeLanguage(lang);
  }
}
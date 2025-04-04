import { Component } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';
import { SharedModule } from '../shared/sharedModule.module';
import { LanguageService } from '../services/language.service';
import { TranslateModule } from '@ngx-translate/core';
import { DomSanitizer } from '@angular/platform-browser';
import { BaseComponent } from '../shared/base.component';

@Component({
    selector: 'app-blog',
    imports: [SharedModule, TranslateModule],
    templateUrl: './blog.component.html',
    styleUrl: './blog.component.scss'
})

export class BlogComponent extends BaseComponent {
    
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

  constructor(private lightbox: Lightbox, languageService: LanguageService, sanitizer: DomSanitizer) {
    super(languageService, sanitizer);
  }

  openLightbox(index: number): void {
    this.lightbox.open(this.album, index);
  }

  closeLightbox(): void {
    this.lightbox.close();
  }
}
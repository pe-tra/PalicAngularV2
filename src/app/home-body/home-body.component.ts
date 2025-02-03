import { Component } from '@angular/core';
import { SharedModule } from '../shared/sharedModule.module';
import { Lightbox } from 'ngx-lightbox';
import { LanguageService } from '../services/language.service';
import { TranslateModule } from '@ngx-translate/core';
import { DomSanitizer } from '@angular/platform-browser';
import { BaseComponent } from '../shared/base.component';

@Component({
  selector: 'app-home-body',
  imports: [SharedModule, TranslateModule],
  templateUrl: './home-body.component.html',
  styleUrl: './home-body.component.scss'
})
export class HomeBodyComponent extends BaseComponent{
  album: any[] = [
    {
      src: 'assets/jezeroZalazak1.webp'
    },
    {
      src: 'assets/parkTrka13.webp'
    },
    {
      src: 'assets/park1.webp'
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

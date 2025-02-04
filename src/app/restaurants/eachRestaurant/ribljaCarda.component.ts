import { Component } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';
import { LanguageService } from '../../services/language.service';
import { TranslateModule } from '@ngx-translate/core';
import { DomSanitizer } from '@angular/platform-browser';
import { SharedModule } from '../../shared/sharedModule.module';
import { BaseComponent } from '../../shared/base.component';

@Component({
    selector: 'app-ribljaCarda',
    imports: [SharedModule, TranslateModule],
    templateUrl: './ribljaCarda.component.html',
    styleUrl: './eachRestaurant.component.scss'
})

export class RibljaCardaComponent extends BaseComponent {
    album: any[] = [
    {
      src: 'assets/rCarda3.webp'
    },
    {
      src: 'assets/rCarda8.webp'
    },
    {
      src: 'assets/rCarda1.webp'
    },
    {
      src: 'assets/rCarda4.webp'
    },
    {
      src: 'assets/rCarda5.webp'
    },
    {
      src: 'assets/rCarda7.webp'
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
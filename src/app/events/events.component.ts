import { Component } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';
import { SharedModule } from '../shared/sharedModule.module';
import { LanguageService } from '../services/language.service';
import { TranslateModule } from '@ngx-translate/core';
import { DomSanitizer } from '@angular/platform-browser';
import { BaseComponent } from '../shared/base.component';

@Component({
    selector: 'app-events',
    imports: [SharedModule, TranslateModule],
    templateUrl: './events.component.html',
    styleUrl: './events.component.scss'
})

export class EventsComponent extends BaseComponent {
    album: any[] = [
        {
          src: 'assets/parkTrka10.webp'
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
import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { LanguageService } from '../services/language.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-nav',
  standalone: false,
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent implements OnInit {

  activeMenu: string = '';
  constructor(private router: Router, private languageService: LanguageService, private translate: TranslateService) {}
  
  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      const currentRoute = event.urlAfterRedirects;
      this.activeMenu = currentRoute;
      localStorage.setItem('activeMenu', currentRoute);
    });

    const storedActiveMenu = localStorage.getItem('activeMenu');
    if (storedActiveMenu) {
      this.activeMenu = storedActiveMenu;
    }

    this.translate.onLangChange.subscribe(() => {
      this.translate.use(this.translate.currentLang);
    });
  }

  setActiveMenu(menu: string): void {
    this.activeMenu = menu;
    localStorage.setItem('activeMenu', menu);
  }

  @ViewChild('navMenu') navMenu!: ElementRef;
  @ViewChild('burgerButton') burgerButton!: ElementRef;

  isMenuOpen: boolean = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;

    if (this.isMenuOpen) {
      this.navMenu.nativeElement.classList.add('active');
    } else {
      this.navMenu.nativeElement.classList.remove('active');
    }
  }

  changeLanguage(lang: string) {
    this.languageService.changeLanguage(lang);
  }
}

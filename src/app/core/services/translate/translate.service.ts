import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { isPlatformBrowser, DOCUMENT } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CustomTranslateService {
  private rtlSubject = new BehaviorSubject<boolean>(false);
  rtl$ = this.rtlSubject.asObservable();

  constructor(
    private translate: TranslateService,
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.initLang();
  }

  private initLang() {
    let lang = 'en';

    if (isPlatformBrowser(this.platformId)) {
      const storedLang = localStorage.getItem('lang');
      if (storedLang) {
        lang = storedLang;
      }
    }

    this.translate.setDefaultLang('en');
    this.translate.use(lang);

    if (isPlatformBrowser(this.platformId)) {
      this.document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
      this.document.documentElement.lang = lang;
      this.rtlSubject.next(lang === 'ar');
    }
  }

  switchLang(lang: string) {
    this.translate.use(lang);

    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('lang', lang);
      this.document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
      this.document.documentElement.lang = lang;
      this.rtlSubject.next(lang === 'ar');
    }
  }

  getCurrentLang(): string {
    return this.translate.currentLang || 'en';
  }
}

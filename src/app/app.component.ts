import { Component, inject } from '@angular/core';
import {
  RouteConfigLoadEnd,
  RouteConfigLoadStart,
  Router,
  RouterOutlet,
} from '@angular/router';
import { FlowbiteService } from './core/guards/interceptors/services/flowbitw/flowbite.service';
import { initFlowbite } from 'flowbite';
import { FooterComponent } from './layouts/footer/footer.component';
import { ThemeService } from './core/guards/interceptors/services/theme/theme.service';
import { TranslateService } from '@ngx-translate/core';
import { signal, inject as coreInject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';
import { NavbarComponent } from './layouts/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  public loading = signal(true);

  constructor(private router: Router) {
    // مراقبة التحميل
    this.router.events.subscribe((event) => {
      if (event instanceof RouteConfigLoadStart) {
        this.loading.set(true);
      }
      if (event instanceof RouteConfigLoadEnd) {
        this.loading.set(false);
      }
    });
  }

  title = 'pro';
  isLangReady = signal(false);

  private flowbiteService = inject(FlowbiteService);
  private translate = inject(TranslateService);
  private platformId = coreInject(PLATFORM_ID);
  public readonly themeService = inject(ThemeService);

  toggleTheme() {
    this.themeService.toggleDarkMode();
  }

  ngOnInit(): void {
    // 1. تهيئة flowbite
    this.flowbiteService.loadFlowbite(() => {
      initFlowbite();
    });

    // 2. تحديد اللغة الافتراضية بطريقة آمنة للسيرفر
    let selectedLang = 'en';
    if (isPlatformBrowser(this.platformId)) {
      const savedLang = localStorage.getItem('lang');
      if (savedLang) {
        selectedLang = savedLang;
      }
    }

    this.translate.setDefaultLang('en');
    this.translate.use(selectedLang).subscribe(() => {
      this.isLangReady.set(true);
    });
  }
}

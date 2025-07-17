import { Component, inject, signal } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CustomTranslateService } from '../../core/services/translate/translate.service';
import { ThemeService } from '../../core/guards/interceptors/services/theme/theme.service';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CartService } from '../../core/services/cart.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [TranslateModule,RouterLink,RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  {
  private translateService = inject(CustomTranslateService);
  public readonly themeService = inject(ThemeService);
cartCount: number = 0;
  private readonly cartService = inject(CartService);
  currentLang = this.translateService.getCurrentLang();

  toggleLang() {
    this.currentLang = this.currentLang === 'ar' ? 'en' : 'ar';
    this.translateService.switchLang(this.currentLang);
  }

  toggleTheme() {
    this.themeService.toggleDarkMode();
  }

  // ✅ الحالة الخاصة بالقائمة الجانبية للموبايل
  mobileMenuOpen = signal(false);

  toggleMobileMenu() {
    this.mobileMenuOpen.update(v => !v);
  }

  closeMobileMenu() {
    this.mobileMenuOpen.set(false);
  }
}

import { Injectable, Inject, PLATFORM_ID, Renderer2, RendererFactory2 } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private isDarkMode = false;
  private renderer: Renderer2;
  private isBrowser: boolean;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private rendererFactory: RendererFactory2
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
    this.renderer = this.rendererFactory.createRenderer(null, null);

    if (this.isBrowser) {
      const saved = localStorage.getItem('darkMode');
      if (saved === 'true') {
        this.isDarkMode = true;
        this.renderer.addClass(document.documentElement, 'dark');
      }
    }
  }

  toggleDarkMode() {
    if (!this.isBrowser) return;

    this.isDarkMode = !this.isDarkMode;

    if (this.isDarkMode) {
      this.renderer.addClass(document.documentElement, 'dark');
    } else {
      this.renderer.removeClass(document.documentElement, 'dark');
    }

    localStorage.setItem('darkMode', String(this.isDarkMode));
  }

  get currentMode(): boolean {
    return this.isDarkMode;
  }
}

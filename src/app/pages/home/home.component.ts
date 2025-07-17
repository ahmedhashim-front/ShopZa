import { Component, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { CustomTranslateService } from '../../core/services/translate/translate.service';
import { Subscription } from 'rxjs';
import { RouterLink } from '@angular/router';
import { CategoryComponent } from '../category/category.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TranslateModule, CarouselModule,RouterLink,CategoryComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
 customOptions: OwlOptions = {} as OwlOptions;
  isRtl = false;

  private rtlSub!: Subscription;

  constructor(private customTranslateService: CustomTranslateService) {}

  ngOnInit() {
    this.rtlSub = this.customTranslateService.rtl$.subscribe((isRtl) => {
      this.isRtl = isRtl;
      this.customOptions = {
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        mouseDrag: true,
        touchDrag: true,
        pullDrag: true,
        dots: false,
        nav: false,
        items: 1,
        navSpeed: 600,
        rtl: this.isRtl,
      };
    });
  }

  ngOnDestroy() {
    if (this.rtlSub) {
      this.rtlSub.unsubscribe();
    }
  }
}





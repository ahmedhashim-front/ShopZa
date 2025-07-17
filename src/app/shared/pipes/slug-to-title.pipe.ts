import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'slugToTitle',
  standalone: true, // مهم جدًا علشان تقدر تستخدمها بدون إضافتها في NgModule
})
export class SlugToTitlePipe implements PipeTransform {
  transform(value: unknown): string {
    if (typeof value !== 'string') return '';

    return value
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }
}

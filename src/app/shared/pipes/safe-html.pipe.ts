import { DomSanitizer } from '@angular/platform-browser';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'safeHtml',
})
export class SafeHtmlPipe implements PipeTransform {
  // Sanitized input from the DOM exports safe html
  constructor(private sanitized: DomSanitizer) { }
  transform(value: any) {
    // console.log('transform value from tab', value);
    this.sanitized.bypassSecurityTrustStyle(value);
    return this.sanitized.bypassSecurityTrustHtml(value);
  }
}

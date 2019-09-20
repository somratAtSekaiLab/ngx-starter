import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';

/**
 * Safe HTML pipe
 */
@Pipe({
  name: 'safeHtml'
})
export class SafeHtmlPipe implements PipeTransform {
  /**
   * Constructor
   * @param sanitizer
   */
  constructor(
    private sanitizer: DomSanitizer
  ) {
  }
  /**
   * Transform
   * @param html
   */
  transform(html): any {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

}

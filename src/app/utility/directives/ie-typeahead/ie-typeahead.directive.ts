import { Directive, Input, HostListener } from '@angular/core';
import { FormControl } from '@angular/forms';

/**
 * Ie type ahead directive to set blank on focus to prevent double click to select item
 */
@Directive({
  selector: '[appIeTypeahead]'
})
export class IeTypeaheadDirective {
  /**
   * Input target item
   */
  @Input() target: FormControl;
  /**
   * Is IE flag
   */
  isIE: boolean;

  /**
   * Constructor
   */
  constructor(
  ) {
    const ua = window.navigator.userAgent.toLowerCase();
    this.isIE = (ua.indexOf('msie') >= 0 || ua.indexOf('trident') >= 0);
  }

  /**
   * Host listener
   * @param event
   */
  @HostListener('focus', ['$event'])
  onFocus(event): void {
    if (this.isIE) {
      this.target.setValue(' ');
    }
  }


}

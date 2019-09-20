import { Directive, Input, ElementRef, Renderer2, DoCheck } from '@angular/core';
import { FormControl } from '@angular/forms';

/**
 * Add/remove class while error input field
 */
@Directive({
  selector: '[appHasError]'
})
export class HasErrorDirective implements DoCheck {

  /**
   * Constructor
   * @param element
   * @param renderer
   */
  constructor(
    private element: ElementRef,
    private renderer: Renderer2
  ) { }

  /**
   * Input custom class
   */
  @Input() customClass = 'text-danger';

  /**
   * Input form control
   */
  @Input() control: FormControl;


  /**
   * Change detector
   */
  ngDoCheck(): void {
    if (this.control.invalid && this.control.touched && this.control.dirty) {
      return this.renderer.addClass(this.element.nativeElement, this.customClass);
    }

    this.renderer.removeClass(this.element.nativeElement, this.customClass);
  }
}

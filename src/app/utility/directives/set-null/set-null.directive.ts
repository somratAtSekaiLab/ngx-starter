import { Directive, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

/**
 * Set null while blank directive
 */
@Directive({
  selector: '[appSetNull]'
})
export class SetNullDirective {

  /**
   * @ignore
   */
  @Input('control') set control(control: FormControl) {
    control
      .valueChanges
      .subscribe(value => {
        if (value === '' || value === 'null') {
          control.setValue(null);
        }
      });
  }

}

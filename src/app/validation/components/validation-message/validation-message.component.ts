import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ValidationService } from '@app/validation/services';

/**
 * Validation message component
 */
@Component({
  selector: 'app-validation-message',
  templateUrl: './validation-message.component.html',
  styleUrls: ['./validation-message.component.scss']
})
export class ValidationMessageComponent {

  /**
   * Input form control
   */
  @Input() control: FormControl;
  /**
   * Input custom messages
   */
  @Input() customMessages: any;
  /**
   * Input message template default 0
   */
  @Input() template = 0;

  /**
   * Constructor
   * @param service
   */
  constructor(
    private service: ValidationService
  ) { }

  /**
   *  Get error message
   */
  get errorMessage() {
    for (const propertyName in this.control.errors) {
      if (this.control.errors.hasOwnProperty(propertyName)) {
        if (this.control.touched && this.control.dirty) {
          return this.service
            .getValidatorErrorMessage(
              propertyName,
              this.control.errors[propertyName],
              this.customMessages
            );
        }
      }
    }

    return null;
  }

}

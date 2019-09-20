import { Validators, AbstractControl, ValidatorFn, AsyncValidatorFn, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import * as moment from 'moment';
import { AppOptions } from '@app/app.options';

/**
 * Core Validators
 */
export class CoreValidators extends Validators {

  /**
   * Equal to validator
   * @param targetControl
   */
  static equalTo(targetControl: AbstractControl): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      let hasError: boolean;

      if (control.value && targetControl.value && control.value !== targetControl.value) {
        hasError = true;
      }

      return hasError ? { equalTo: { value: control.value } } : null;
    };
  }

  /**
   * Number validator
   */
  static number(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      let hasError: boolean;

      if (control.value && !AppOptions.patterns.number.test(control.value)) {
        hasError = true;
      }
      return hasError ? { number: { value: control.value } } : null;
    };
  }

  /**
   * Decimal validator
   */
  static decimal(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      let hasError: boolean;

      if (control.value && !AppOptions.patterns.decimal.test(control.value)) {
        hasError = true;
      }
      return hasError ? { decimal: { value: control.value } } : null;
    };
  }

  /**
   * Phone validator
   */
  static phone(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      let hasError: boolean;

      if (control.value && !AppOptions.patterns.phone.test(control.value)) {
        hasError = true;
      }
      return hasError ? { phone: { value: control.value } } : null;
    };
  }

  /**
   * Url validator
   */
  static url(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      let hasError: boolean;

      if (control.value && !AppOptions.patterns.url.test(control.value)) {
        hasError = true;
      }

      return hasError ? { url: { value: control.value } } : null;
    };
  }

  /**
   * Is required validator
   * @param targetControl
   * @param compareValue
   */
  static isRequired(targetControl: AbstractControl, compareValue): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      let isRequired: boolean;

      if (
        (control.value === null ||
         control.value === ''   ||
         control.value === undefined) && targetControl.value === compareValue) {
        isRequired = true;
      }

      return isRequired ? { required: { value: control.value } } : null;
    };
  }

  /**
   * Is required validator
   * @param targetControl
   */
  static isConditionalRequired(targetControl: AbstractControl): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      let isConditionalRequired: boolean;

      if (
        (control.value === null ||
         control.value === ''   ||
         control.value === undefined) && targetControl.value) {
          isConditionalRequired = true;
      }

      return isConditionalRequired ? { required: { value: control.value } } : null;
    };
  }
  /**
   * Is date passed to conpared date validator
   * @param compareDate
   */
  static isPassedDate(compareDate: Date): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      let isPassed: boolean;
      if (control.value && compareDate) {
        const endDate = new Date(control.value);
        endDate.setHours(0, 0, 0, 0);
        compareDate.setHours(0, 0, 0, 0);
        const start = compareDate.getTime();
        const end = endDate.getTime();
        if (start > end) {
          isPassed = true;
        }
      }

      return isPassed ? { passedDate: { value: control.value } } : null;
    };
  }
  /**
   * Blank space validator
   */
  static blankSpace(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      let hasError: boolean;

      if (control.value) {
        hasError = (control.value.trim().length === 0);
        return hasError ? { blankSpace: { value: control.value } } : null;
      }

      return null;
    };
  }

  /**
   * Is selected from list
   * @param listItems
   * @param compareKey
   */
  static isSelectedFromList(listItems, compareKey): AsyncValidatorFn {
    return (control: AbstractControl): Observable<{ [key: string]: any } | null> => {
      return new Observable((observer) => {
        return listItems.subscribe((res) => {
          const index = res.findIndex(e => e[compareKey] === control.value);
          if (index === -1) {
            observer.next({ isSelectedFromList: true });
          } else {
            observer.next(null);
          }
          return observer.complete();
        });
      });
    };
  }

  /**
   * Is passed time
   * Control value should be in HH:mm format
   * @param targetControl
   */
  static isPassedTime(targetControl: AbstractControl): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      let isTimePassed: boolean;

      const start = targetControl.value.split(':');
      const end   = control.value.split(':');

      if (start.length > 1 && end.length > 1) {
        const startMoment = moment({hour: start[0], minute: start[1]});
        const endMoment   = moment({hour: end[0], minute: end[1]});

        isTimePassed = startMoment.isSameOrAfter(endMoment);
      }

      return isTimePassed ? { isTimePassed: { value: control.value } } : null;
    };
  }

  /**
   * Is conditionaly relative required validator
   * @param controlName
   */
  static isRelativeRequired(controlName: string): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      let isRequired: boolean;

      if (control.parent) {
        const targetControl = control.parent.get(controlName) as FormControl;
        if ((control.value === null || control.value === '' || control.value === undefined) && targetControl.value) {
           isRequired = true;
        }
      }

      return isRequired ? { required: { value: control.value } } : null;
    };
  }
}


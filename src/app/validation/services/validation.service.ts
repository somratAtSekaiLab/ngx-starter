import { Injectable } from '@angular/core';

/**
 * Validation Service
 */
@Injectable({
  providedIn: 'root'
})
export class ValidationService {
  /**
   * @ignore
   */
  constructor(
  ) { }
  /**
   * Get validation error message
   * @param validatorName
   * @param validatorValue
   * @param customMessages
   */
  public getValidatorErrorMessage(
    validatorName: string,
    validatorValue?: any,
    customMessages?: any
  ) {
    const customMsg = customMessages !== undefined ? customMessages : {};
    const config = {
      required: customMsg.required
        ? customMsg.required
        : 'This field is required',

      userExist: customMsg.userExist
        ? customMsg.userExist
        : 'User already exist',

      pattern: customMsg.pattern
        ? customMsg.pattern
        : 'Invalid pattern',

      min: customMsg.min
        ? customMsg.min
        : `Minimum value ${validatorValue.min}`,

      max: customMsg.max
        ? customMsg.max
        : `Maximum value is ${validatorValue.max}`,

      maxlength: customMsg.maxlength
        ? customMsg.maxlength
        : `Maximum length is ${validatorValue.requiredLength}`,

      minlength: customMsg.minlength
        ? customMsg.minlength
        : `Minimum length is ${validatorValue.requiredLength}`,

      equalTo: customMsg.equalTo
        ? customMsg.equalTo
        : 'Not matched',

      number: customMsg.number
        ? customMsg.number
        : 'Invalid number format',

      decimal: customMsg.decimal
        ? customMsg.decimal
        : 'Invalid entry',

      phone: customMsg.phone
        ? customMsg.phone
        : 'Invalid phone number',

      url: customMsg.url
        ? customMsg.url
        : 'Invalid URL',

      invalidValueRange: customMsg.invalidValueRange
        ? customMsg.invalidValueRange
        : 'Invalid range',

      bsDate: customMsg.bsDate
        ? customMsg.bsDate
        : 'Invalid date',

      passedDate: customMsg.passedDate
        ? customMsg.passedDate
        : 'Invalid date',

      blankSpace: customMsg.blankSpace
        ? customMsg.blankSpace
        : 'Not a valid input',

      isSelectedFromList: customMsg.isSelectedFromList
        ? customMsg.isSelectedFromList
        : 'Please select from the list',

      isTimePassed: customMsg.isTimePassed
        ? customMsg.isTimePassed
        : 'Invalid time range'
    };

    return config[validatorName];
  }
}

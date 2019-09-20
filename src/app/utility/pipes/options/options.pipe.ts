import { Pipe, PipeTransform } from '@angular/core';
import { IOptions } from '@app/core';

/**
 * Options Arguments interface
 */
export interface IOptionArgs {
  /**
   * Options
   */
  options: Array<IOptions>;
  /**
   * Default
   */
  default?: any;
}

/**
 * Options converter
 */
@Pipe({
  name: 'options'
})
export class OptionsPipe implements PipeTransform {
  /**
   * Declare default
   */
  private default: any;
  /**
   * Transform
   * @param value
   * @param args
   */
  transform(value: any, args: IOptionArgs): any {

    this.default = args.default ? args.default : '';

    if (value === '' || value === null || value === undefined || !args) {
      return this.default;
    }

    const elem = args.options.find((e) => {
      // Skip type checking
      // tslint:disable-next-line:triple-equals
      return e.value == value;
    });

    if (elem) {
      return elem.label;
    }

    return this.default;
  }

}

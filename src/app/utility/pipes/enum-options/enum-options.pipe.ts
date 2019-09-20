import { Pipe, PipeTransform } from '@angular/core';
/**
 * Enum Option arguments interface
 */
export interface IEnumOptionArgs {
  /**
   * Options
   */
  options: any;
  /**
   * Separator
   */
  separator: string;
}
/**
 * Enum options converter pipe
 */
@Pipe({
  name: 'enumOptions'
})
export class EnumOptionsPipe implements PipeTransform {

  /**
   * Transform
   * @param value
   * @param args
   */
  transform(value: any, args: IEnumOptionArgs): any {

    const transformed = [];

    for (const key in value) {
      if (value.hasOwnProperty(key) && value[key]) {
        transformed.push(args.options[key]);
      }
    }

    return transformed.length ? transformed.join(args.separator) : '-';
  }

}

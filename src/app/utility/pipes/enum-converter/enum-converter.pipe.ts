import { Pipe, PipeTransform } from '@angular/core';

/**
 * Enum converter pipe
 */
@Pipe({
  name: 'enum'
})
export class EnumConverterPipe implements PipeTransform {

  /**
   * Transform
   * @param value
   * @param args
   */
  transform(value: any, args: object): any {

    if (!value || !args) {
      return '-';
    }

    if (args.hasOwnProperty(value)) {
      return args[value];
    }

    return '-';

  }

}

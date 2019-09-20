import { Pipe, PipeTransform } from '@angular/core';
/**
 * Sort pipe
 * DESC in order
 */
@Pipe({
  name: 'sort',
  pure: false
})
export class SortPipe implements PipeTransform {
  /**
   * Transform
   * @param array
   * @param field
   */
  transform(array: any, field: string): any[] {

    if (!Array.isArray(array)) {
      return;
    }

    array.sort((a: any, b: any) => {
      if (a[field] > b[field]) {
        return -1;
      } else if (a[field] < b[field]) {
        return 1;
      } else {
        return 0;
      }
    });

    return array;
  }

}

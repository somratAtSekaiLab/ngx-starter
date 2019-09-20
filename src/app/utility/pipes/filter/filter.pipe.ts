import { Pipe, PipeTransform } from '@angular/core';
/**
 * Filter Arguments interface
 */
export interface IFilterArgs {
  /**
   * Filter by
   */
  filterBy: any;
  /**
   * Filter field
   */
  field: string;
}

/**
 * Filter pipe
 */
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  /**
   * Transform
   * @param items
   * @param args
   */
  transform(items: any, args: IFilterArgs): any[] {
    if (!args.filterBy) {
      return items;
    }
    return items.filter(item => item[args.field].indexOf(args.filterBy) !== -1);
  }

}

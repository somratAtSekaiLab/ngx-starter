import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

/**
 * To date pipe
 */
@Pipe({
  name: 'toDate'
})
export class ToDatePipe implements PipeTransform {
  /**
   * Transform to date
   * @param value
   * @param args
   */
  transform(value: any, args?: any): Date {
    if (!value) { return; }
    return moment(value).toDate();
  }

}

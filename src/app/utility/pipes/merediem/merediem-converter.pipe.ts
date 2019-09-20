import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

/**
 * Merediem converter pipe
 */
@Pipe({
  name: 'merediem'
})
export class MerediemConverterPipe implements PipeTransform {

  /**
   * transform
   * @param value
   * @param args
   */
  transform(value: any, args?: any): any {
    if (!value) {
      return;
    }

    /**
     * Expected value 24 hour time format, ie. hour:minute:second
     * Returned value 12 hour time format, hour:minute with AM or PM
     */
    return moment(value, 'HH:mm:ss').format('hh:mm A');
  }

}

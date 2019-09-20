import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';

/**
 * Options Interface
 */
export interface IOptions {
  /**
   * Value
   */
  value: any;
  /**
   * Label
   */
  label: string;
}

/**
 * Options Service to manage application options
 */
@Injectable({
  providedIn: 'root'
})
export class OptionsService {
  /**
   * Constructor
   * @param http
   */
  constructor(
    private http: HttpClient
  ) {}

  /**
   * Get options from enum
   * @param data
   */
  getOptions(data: object): Array<IOptions> {
    const options: Array<IOptions> = [];

    for (const key in data) {
      if (data.hasOwnProperty(key)) {

        const item = {
          value: key,
          label: data[key]
        };

        options.push(item);
      }
    }

    return options;
  }

  /**
   * Get time list
   * @param divisor
   */
  getTimes(divisor = 1, from = { hours: 0, minutes: 0 }, to = { hours: 23, minutes: 59 }): Array<any> {

    const startMoment = moment().set(from);
    const endMoment   = moment().set(to);
    const slots       = [];

    const start = moment().startOf('day');
    const times = 24 * divisor; // 24 hours * divisor in minute in an hour

    for (let i = 0; i < times; i++) {
      const time: any   = moment(start).add((60 / divisor) * i, 'minutes').format('HH:mm');
      const timeMoment  = moment().set({ hours: time.split(':')[0], minutes: time.split(':')[1]});
      const isBetween   = moment(timeMoment).isBetween(startMoment, endMoment);
      if (isBetween) {
        slots.push(time);
      }
    }

    return slots;

  }

}

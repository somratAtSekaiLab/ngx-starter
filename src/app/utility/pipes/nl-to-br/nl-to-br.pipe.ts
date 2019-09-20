import { Pipe, PipeTransform } from '@angular/core';
/**
 * Nl to Br pipe
 */
@Pipe({
  name: 'nlToBr'
})
export class NlToBrPipe implements PipeTransform {
  /**
   * Transform
   * @param value
   */
  transform(value: string): any {
    const output = value.replace(/&/g, '&amp;')
                        .replace(/"/g, '&quot;')
                        .replace(/</g, '&lt;')
                        .replace(/>/g, '&gt;')
                        .replace(/(?:\r\n|\r|\n)/g, '<br />');
    return output;
  }

}

import { Pipe, PipeTransform } from '@angular/core';
import * as $ from 'jquery';

@Pipe({
  name: 'excerpt'
})
export class ExcerptPipe implements PipeTransform {

  transform(value: string, count?: number, dotdotdot?: boolean): any {
    value = $('<div>' + value + '</div>').text();
    const originalLength = value.length;

    if (count) {
      value = value.substr(0, count);
    }

    if (dotdotdot) {
      if (originalLength > value.length) {
        value += '...';
      }
    }

    return value;
  }

}

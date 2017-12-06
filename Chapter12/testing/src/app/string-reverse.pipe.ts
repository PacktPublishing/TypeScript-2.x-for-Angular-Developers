import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringReverse'
})
/**
 * THis reverses a given string. eg boy would give yob
 */
export class StringReversePipe implements PipeTransform {

  transform( input: string): string {
    return input.length === 0 ? '' : input.split('').reverse().join('') ;
  }

}

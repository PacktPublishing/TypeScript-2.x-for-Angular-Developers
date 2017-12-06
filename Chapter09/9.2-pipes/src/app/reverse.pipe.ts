import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(args){
      return value.split(' ').reverse().join(' ');
    } else {
      return value.split('').reverse().join('');
    }
  }

}

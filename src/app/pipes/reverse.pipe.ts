import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: string): any {
    let ch='';
    for (let index = value.length - 1; index >= 0; index--) {
      ch+=value[index];
    }
    return ch;
  }

}

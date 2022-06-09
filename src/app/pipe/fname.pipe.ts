import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fname'
})
export class FnamePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    let result=(value.substring(0,2)).toUpperCase()
    return result
   
  }

}

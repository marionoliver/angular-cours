import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mineur'
})
export class MineurPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value < 18 ? 'mineur' : '';
  }

}

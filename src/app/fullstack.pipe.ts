import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fullstack'
})
export class FullstackPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return "- "+ value + " not at all";
  }

}
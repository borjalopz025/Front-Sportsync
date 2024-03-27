import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'date'
})
export class DatePipe implements PipeTransform {

  transform(value: string): string {
    if (!value) return value;

    const date = new Date(value);
    return date.toLocaleDateString('es-ES');
  }

}

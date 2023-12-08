import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncateDescription',
})
export class TruncateDescriptionPipe implements PipeTransform {
  transform(value: string, maxLength: number = 50): string {
    return value.length > maxLength ? value.substring(0, maxLength) + '...' : value;
  }
}

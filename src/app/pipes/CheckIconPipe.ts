import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'checkIconPipe'
})
export class CheckIconPipe implements PipeTransform {
  transform(value: boolean | null | undefined): string {
    return value ? '✅' : '❌';
  }
}

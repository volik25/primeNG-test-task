import { DecimalPipe } from '@angular/common';
import { Pipe } from '@angular/core';

@Pipe({name: 'separatorPipe'})
export class ThousandSeparatorPipe extends DecimalPipe {
  transform(value: any) {
    if (typeof(value) === 'number') {
        return super.transform(value)?.replace(',', ' ');
    }
    return value;
  }
}
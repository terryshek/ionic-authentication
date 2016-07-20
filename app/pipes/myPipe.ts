import { Pipe, PipeTransform } from '@angular/core';

/*
  Generated class for the MyPipe pipe.

  See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
  Angular 2 Pipes.
*/
@Pipe({
  name: 'my-pipe'
})
@Pipe({name: 'exponentialStrength'})
export class ExponentialStrengthPipe implements PipeTransform {
  transform(value: number, exponent: string): number {
    let exp = parseFloat(exponent);
    console.log(value);    
    console.log(exponent);
    console.log(exp);
    
    return Math.pow(value, isNaN(exp) ? 1 : exp);
  }
}
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TemperatureConverterService {

  constructor() { }

  convertCtoF(c: number): number {
    return parseFloat(((c * 9 / 5) + 32).toFixed(1));
  }

  convertFtoC(f: number): number {
    return parseFloat(((f - 32) * 5  / 9).toFixed(1));
  }
}

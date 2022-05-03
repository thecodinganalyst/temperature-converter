import { TestBed } from '@angular/core/testing';

import { TemperatureConverterService } from './temperature-converter.service';

describe('TemperatureConverterService', () => {
  let service: TemperatureConverterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TemperatureConverterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get correct fahrenheit value', () => {
    expect(service.convertCtoF(0)).toEqual(32);
    expect(service.convertCtoF(100)).toEqual(212);
    expect(service.convertCtoF(37.9)).toEqual(100.2);
    expect(service.convertCtoF(50.1)).toEqual(122.2);
  });

  it('should get correct celcius value', () => {
    expect(service.convertFtoC(0)).toEqual(-17.8);
    expect(service.convertFtoC(100)).toEqual(37.8);
    expect(service.convertFtoC(212)).toEqual(100);
    expect(service.convertFtoC(32)).toEqual(0);
  });
});

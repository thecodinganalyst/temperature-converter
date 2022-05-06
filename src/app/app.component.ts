import {Component, Input} from '@angular/core';
import {TemperatureConverterService} from "./temperature-converter.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fahrenheit?: number;
  celsius?: number;

  constructor(
    private temperatureConverter: TemperatureConverterService
  ) {
  }

  updateFahrenheit(){
    if(this.celsius == null) this.celsius = 0;
    this.fahrenheit = this.temperatureConverter.convertCtoF(this.celsius!);
  }

  updateCelsius(){
    if(this.fahrenheit == null) this.fahrenheit = 0;
    this.celsius = this.temperatureConverter.convertFtoC(this.fahrenheit!);
  }
}

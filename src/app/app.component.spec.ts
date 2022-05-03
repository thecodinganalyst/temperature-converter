import {ComponentFixture, TestBed} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";

describe('AppComponent', () => {

  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  let compiled: any;
  let celsiusInput: any;
  let fahrenheitInput: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    fixture.autoDetectChanges(true);
    component = fixture.componentInstance;
    compiled = fixture.debugElement.nativeElement;
    celsiusInput = getByTestId("celsius-input");
    fahrenheitInput = getByTestId("fahrenheit-input");
    fixture.detectChanges();
  });

  const getByTestId = (testId: string) => {
    return compiled.querySelector(`[data-test-id="${testId}"]`);
  };

  const pushCelsiusValue = async (value: number) => {
    celsiusInput.value = value;
    celsiusInput.dispatchEvent(new Event('change'));
    celsiusInput.dispatchEvent(new Event('input'));
    await fixture.whenStable();
    await fixture.detectChanges();
  };

  const pushFahrenheitValue = async (value: number) => {
    fahrenheitInput.value = value;
    fahrenheitInput.dispatchEvent(new Event('change'));
    fahrenheitInput.dispatchEvent(new Event('input'));
    await fixture.whenStable();
    await fixture.detectChanges();
  }

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('Typing value in Celsius field gets correct Fahrenheit value', async() => {
    await pushCelsiusValue(500);
    fahrenheitInput = getByTestId('fahrenheit-input');
    expect(Number(fahrenheitInput.value)).toEqual(932);
  });

  it('Typing value in Celsius field gets correct Fahrenheit value upto 1 decimal values', async() => {
    await pushCelsiusValue(32);
    fahrenheitInput = getByTestId('fahrenheit-input');
    expect(Number(fahrenheitInput.value)).toEqual(89.6);
  });

  it('Typing value in Fahrenheit field gets correct Celsius value', async() => {
    await pushFahrenheitValue(932);
    celsiusInput = getByTestId('celsius-input');
    expect(Number(celsiusInput.value)).toEqual(500);
  });

  it('Typing value in Fahrenheit field gets correct Celsius value upto 1 decimal values', async() => {
    await pushFahrenheitValue(100);
    celsiusInput = getByTestId('celsius-input');
    expect(Number(celsiusInput.value)).toEqual(37.8);
  });

  it('Perform series of actions', async() => {
    await pushFahrenheitValue(10);
    celsiusInput = getByTestId('celsius-input');
    expect(Number(celsiusInput.value)).toEqual(-12.2);

    await pushCelsiusValue(10);
    fahrenheitInput = getByTestId('fahrenheit-input');
    expect(Number(fahrenheitInput.value)).toEqual(50);

    await pushFahrenheitValue(200);
    celsiusInput = getByTestId('celsius-input');
    expect(Number(celsiusInput.value)).toEqual(93.3);

    await pushCelsiusValue(248);
    fahrenheitInput = getByTestId('fahrenheit-input');
    expect(Number(fahrenheitInput.value)).toEqual(478.4);
  });
});

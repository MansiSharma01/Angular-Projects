import { Component } from '@angular/core';

export interface City
{
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-root',
  template: `<h1>TRAVELLING</h1>

  <mat-form-field>
    <mat-select placeholder="Select City" id="x" required>
      <mat-option *ngFor="let city of cities" [value]="city.value">
        {{city.viewValue}}
      </mat-option>
    </mat-select>
  </mat-form-field>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
    cities: City[]=[
      {value: 'greece-0', viewValue: 'Greece'},
      {value: 'egypt-1', viewValue: 'Egypt'},
      {value: 'athens-2', viewValue: 'Athens'},
      {value: 'switzerland-3', viewValue: 'Switzerland'}
    ];
}

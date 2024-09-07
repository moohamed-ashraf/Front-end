import { Component, Output, EventEmitter } from '@angular/core';
import { NgModel } from '@angular/forms';
@Component({
  selector: 'app-country-dropdown',
  standalone: true,
  imports: [],
  templateUrl: './country-dropdown.component.html',
  styleUrl: './country-dropdown.component.scss',
})
export class CountryDropdownComponent {
  selectedCountry: any;

  @Output() countrySelected = new EventEmitter<any>();

  onCountrySelected(country: any): void {
    this.selectedCountry = country;
    this.countrySelected.emit(country);
  }
}

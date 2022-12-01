import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgxMaterialTimepickerTheme } from 'ngx-material-timepicker';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css'],
})
export class SearchFormComponent implements OnInit {

  searchFlightForm!: FormGroup;

  timeTheme: NgxMaterialTimepickerTheme = {
    container: {
      bodyBackgroundColor: 'salmon',
      buttonColor: 'sandybrown',
    },
    dial: {
      dialBackgroundColor: 'sandybrown',
      dialEditableBackgroundColor: '#eee',
    },
    clockFace: {
      // clockFaceBackgroundColor: 'red',
      clockHandColor: '#ddd',
      clockFaceInnerTimeInactiveColor: '#000',
    },
  };

  constructor() {}

  ngOnInit(): void {
    this.searchFlightForm = new FormGroup({
      company: new FormControl(''),
      trip: new FormControl(''),
      flight: new FormControl(''),
      aircraft: new FormControl(''),
      departureFrom: new FormControl(''),
      arrivingAt: new FormControl(''),
      deparMax: new FormControl(''),
      deparMin: new FormControl(''),
      departureTimeMin: new FormControl(''),
      departureTimeMax: new FormControl(''),
      arrivingDateMin: new FormControl('') ,
      arrivingDateMax: new FormControl(''),
      arrivingTimeMin: new FormControl(''),
      arrivingTimeMax: new FormControl(''),
      flightMin: new FormControl(''),
      flightMax: new FormControl(''),
      fareMin: new FormControl(''),
      fareMax: new FormControl(''),
      backDateMin: new FormControl(''),
      backDateMax: new FormControl(''),
      backTimeMin: new FormControl(''),
      backTimeMax: new FormControl(''),
      connectionMin: new FormControl(''),
      connectionMax: new FormControl(''),

    });

  }

  resetForm(form: FormGroup) {
    form.reset();
  }
}

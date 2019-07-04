import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {

  carName = null;
  carYear = null;
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onAddCar = new EventEmitter<{ name: string, year: number }>();

  constructor() {
  }

  ngOnInit() {
  }

  addCar() {
    this.onAddCar.emit({
      name: this.carName,
      year: this.carYear,
    });

    this.carName = null;
    this.carYear = null;
  }

}

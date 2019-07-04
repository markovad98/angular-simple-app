import {Component} from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})


export class CarsComponent {

  constructor() {
  }

  cars = [
    {name: 'lada', year: 2004},
    {name: 'honda', year: 2005},
  ];

  isEmpty = false;

  updateCarList(car: { name: string, year: number }) {
    if (car.name !== null && car.year !== null) {
      this.cars.push(car);
      this.isEmpty = false;
    } else {
      this.isEmpty = true;
    }
  }

  deleteCar(idx: number) {
    this.cars.splice(idx, 1);
  }

}


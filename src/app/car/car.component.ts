import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})

export class CarComponent {
  @Input() car: { name: string, year: number };
  @Input() id: number;
  @Output() onDeleteCar = new EventEmitter<number>();

  isCarSold = false;

  deleteCar(id) {
    this.onDeleteCar.emit(id);
  }
}

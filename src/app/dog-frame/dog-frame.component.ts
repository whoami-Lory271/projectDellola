import { Component } from '@angular/core';
import {Dog} from "../Dog";
import {DOGS} from "../mock-dogs";

@Component({
  selector: 'app-dog-frame',
  templateUrl: './dog-frame.component.html',
  styleUrls: ['./dog-frame.component.css']
})
export class DogFrameComponent {
  dogs = DOGS;
  selectedDog?: Dog;

  onSelect(dog: Dog) {
    this.selectedDog = dog;
  }
}

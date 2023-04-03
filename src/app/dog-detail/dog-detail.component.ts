import { Component, Input } from '@angular/core';
import {Dog} from "../Dog";

@Component({
  selector: 'app-dog-detail',
  templateUrl: './dog-detail.component.html',
  styleUrls: ['./dog-detail.component.css']
})
export class DogDetailComponent {
  @Input() dog?: Dog;
}

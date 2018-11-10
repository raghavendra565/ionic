import { Component } from '@angular/core';

/**
 * Generated class for the OffersComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'offers',
  templateUrl: 'offers.html'
})
export class OffersComponent {

  text: string;

  constructor() {
    console.log('Hello OffersComponent Component');
    this.text = 'Hello World';
  }

}

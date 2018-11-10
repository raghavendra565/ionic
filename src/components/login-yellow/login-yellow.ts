import { Component, Input } from '@angular/core';

/**
 * Generated class for the LoginYellowComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'login-yellow',
  templateUrl: 'login-yellow.html'
})
export class LoginYellowComponent {
  @Input() data: any;
  @Input() events: any;

  public username: string;
  public password: string;
  constructor() {
  }
  onEvent = (event: string): void => {
    if (this.events[event]) {
        this.events[event]({
            'username' : this.username,
            'password' : this.password
        });
    }
  }

}

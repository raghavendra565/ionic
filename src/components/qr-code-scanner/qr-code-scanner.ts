import { Component, Input } from '@angular/core';
//import { IonicPage } from 'ionic-angular';
/**
 * Generated class for the QrCodeScannerComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */

//@IonicPage()
@Component({
  selector: 'qr-code-scanner',
  templateUrl: 'qr-code-scanner.html'
})

export class QrCodeScannerComponent {
  @Input() data: any;
  @Input() events: any;

  constructor() {}

  onEvent(event: string, result:any) {
    if (this.events[event]) {
        this.events[event](result);
    }
}

}

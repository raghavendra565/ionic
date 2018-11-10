import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IService } from '../../providers/IService';
//import { BarcodeScanner } from 'ionic-native';
//import {HomePage} from '../home/home';
//import {QRScanner, QRScannerStatus} from "@ionic-native/qr-scanner";

/**
 * Generated class for the ScannerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-scanner',
  templateUrl: 'scanner.html',
})
export class ScannerPage {
  page: any;
  service: IService;
  params: any = {};

  constructor(public navCtrl: NavController, navParams: NavParams) {
      // If we navigated to this page, we will have an item available as a nav param
    /* this.page = navParams.get('page');
    this.service = navParams.get('service');
    if (this.service) {
        this.params = this.service.prepareParams(this.page, navCtrl);
        this.service.load(this.page).subscribe(snapshot => {
            this.params.data = snapshot;
        });
        this.scanner();
      } else {
          console.log("service not available")
          navCtrl.setRoot(HomePage);
      }	*/	
  }

  /* scanner() {
      BarcodeScanner.scan()
          .then((result) => {
              this.params.data = result;
          })
          .catch((error) => {
              alert(error);
          })
  }*/

}

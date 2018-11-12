import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import {QrScannerComponent} from 'angular2-qrscanner';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

/**
 * Generated class for the AngularScannerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-angular-scanner',
  templateUrl: 'angular-scanner.html',
})
export class AngularScannerPage {
  qrData = null;
  createdCode = null;
  scannedCode = null;
  constructor(public navCtrl: NavController, public navParams: NavParams, private barcodeScanner: BarcodeScanner) {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad AngularScannerPage');
    this.scanCode();
  }
  createCode() {
    this.createdCode = this.qrData;
  }
 
  scanCode() {
    this.barcodeScanner.scan().then(barcodeData => {
      this.scannedCode = barcodeData.text;
    }, (err) => {
        //console.log('Error: ', err);
    });
  }

}

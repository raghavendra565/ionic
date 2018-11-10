import { CardPage } from './../card/card';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NavController,ViewController} from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
//import {ModalController} from 'ionic-angular';
import {ProfilePage} from '../profile/profile';
import {WalletPage} from '../wallet/wallet';
import {OffersPage} from '../offers/offers';
//import {ScannerPage} from '../scanner/scanner';
//import {AngularScannerPage} from '../angular-scanner/angular-scanner';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import {AuthService} from '../../providers/auth/auth.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,private barcodeScanner: BarcodeScanner,private http: Http , public auth: AuthService, private httpClient: HttpClient, private viewCtrl: ViewController) {}
  scanSub:any;
  title:any;
  submitted = false;
  scan:any = true;
  scannedCode = null;
  result :any;
  cards_len : any;
  access_token_cookie :any;
  cardsData :any;
  cardsCount :any;
  offersData :any;
  offer_flag = true;
  ionViewWillEnter() {
    this.viewCtrl.showBackButton(false);
    this.httpClient.get("http://183.82.112.165:5000/api/coffee/v1/cards").subscribe(
      data => {
         this.cardsData=data;
         //this.cardsData = this.cardsData.cards;
         this.cardsCount = this.cardsData.cards_len;
    },
    error => {console.log(error.status);});

    this.httpClient.get("http://183.82.112.165:5000/api/coffee/v1/offers/customer").subscribe(
      data => {
        this.offersData = data;
        this.offersData = this.offersData.offers;
        this.offersData = this.offersData.length;
    },

    error => {console.log(error.status); 
      if(error.status == 401)
      {
        //this.navCtrl.push(LoginPage);
      }
  });

  }
  ionViewDidLoad(){
  }

  /*scanOnclick() {
    this.submitted = false;
    this.scan = false;
    let modal = this.modalController.create('ScannerPage');
    console.log(modal);
    modal.present();
  } */
  scanCode() {
    this.barcodeScanner.scan().then(barcodeData => {
      this.scannedCode = barcodeData.text;
      //alert(this.scannedCode);
      let headers = new Headers();
      this.access_token_cookie = localStorage.getItem('access_token_cookie')
      headers.append("Authorization" , `Bearer ${this.auth.getToken()}`);
      headers.append('access_token_cookie', this.access_token_cookie);
      headers.append("Content-Type", "application/json");
      const requestOptions  = new RequestOptions({ headers : headers });
      var url = "http://183.82.112.165:5000/api/coffee/v1/qrscan";
      var body = JSON.stringify({"qr_code":this.scannedCode});
      this.http.post(url, body ,requestOptions).subscribe(data => {
        
        this.result=data.json();
        console.log(this.result);
        if(this.result.card.free_next == true){
          alert("WoooHoooo!!!    You have unlocked a free coffee!!!");
        }
        else if(this.result.card.card_size == this.result.card.coffees + this.result.card.card_size){
          alert("WoooHoooo!!!  it's a free coffee!!!");
        }
        //alert(this.result.msg);
        console.log(this.result.card,"home ")
        this.navCtrl.push(CardPage, {data: this.result.card});
      
      }, error => {alert("something went wrong... it may be network problem");})
    }, (err) => {
        console.log('Error: ', err);
    });
  }

  scanCodeCopy() {
      this.scannedCode = "$2b$12$RMqFc/2mztXQajvUPGqg5ejj6/s9/UduF9gijelyEiFpjPigBRLfW";
      //alert(this.scannedCode);
      console.log("signup");
      let headers = new Headers();
      this.access_token_cookie = localStorage.getItem('access_token_cookie')
      headers.append("Authorization" , `Bearer ${this.auth.getToken()}`);
      headers.append('access_token_cookie', this.access_token_cookie);
      headers.append("Content-Type", "application/json");
      const requestOptions  = new RequestOptions({ headers : headers });
      var url = "http://183.82.112.165:5000/api/coffee/v1/qrscan";
      var body = JSON.stringify({"qr_code":this.scannedCode});
      this.http.post(url, body ,requestOptions).subscribe(data => {
        
        this.result=data.json();
        console.log(this.result);
        //alert(this.result.msg);
        //alert(this.result.card.retailer);
        if(this.result.card.free_next == true){
          alert("WoooHoooo!!!    You have unlocked a free coffee!!!");
        }
        else if(this.result.card.card_size == this.result.card.coffees + this.result.card.card_size){
          alert("WoooHoooo!!!  it's a free coffee!!!");
        }
        console.log(this.result.card,"home ")
        this.navCtrl.push(CardPage, {data: this.result.card});
      
      }, error => {alert(error);})
  }
  profile(){
    this.navCtrl.push(ProfilePage);
  }
  offers(){
    this.offer_flag = false;
    this.navCtrl.push(OffersPage);
  }
  wallet(){
    this.navCtrl.push(WalletPage);
  }
}
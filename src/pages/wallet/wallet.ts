import { LoginPage } from './../login/login';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CardPage} from '../card/card';

/**
 * Generated class for the WalletPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-wallet',
  templateUrl: 'wallet.html',
})
export class WalletPage {

  card_size :any;
  count : number;
  dataOfCard : any;
  cardsData : any; 
  i : number;
  next = false;
  b = [];
  images = [];
  imagevalue:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
  }
  
  ionViewDidLoad() {
    this.http.get("http://183.82.112.165:5000/api/coffee/v1/cards").subscribe(
      data => {
         this.cardsData=data;
         this.cardsData = this.cardsData.cards;
         //this.cardsData = this.cardsData[0]["no"] = 6;
         //console.log(this.cardsData[0]["no"]);
         this.count = this.cardsData.length;
         let k =0
         while(k != this.count){
          this.cardsData[k]["no"] = k % 6;
           this.images[k] = k % 6;
           k = k+1;
         }
         //console.log(this.images);
         //console.log(this.cardsData);
         for(this.i = 0; this.i < this.count ; this.i++){
            this.b[this.i] = this.i;
         }
    },

    error => {//console.log(error.status); 
      if(error.status == 401)
      {
        localStorage.removeItem("access_token_cookie");
        localStorage.removeItem("refresh_token_cookie");
        this.navCtrl.setRoot(LoginPage);
        alert(" Session time out... Plese login again");
      }
  });
  }

  count1(){
    this.count = this.count+1;
  }
  cardDetail(x : any){
    this.navCtrl.push(CardPage, {data:x});
    //this.dataOfCard = x;
    //this.next = true;
  }
}

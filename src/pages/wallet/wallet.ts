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
  images = ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png"];
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
  }
  
  ionViewDidLoad() {
    this.http.get("http://183.82.112.165:5000/api/coffee/v1/cards").subscribe(
      data => {
         this.cardsData=data;
         this.cardsData = this.cardsData.cards;
         this.count = this.cardsData[0].card_size + 1;
         for(this.i = 0; this.i < this.count ; this.i++){
            this.b[this.i] = this.i;
         }
    },

    error => {console.log(error.status); 
      if(error.status == 401)
      {
        this.navCtrl.push(LoginPage);
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

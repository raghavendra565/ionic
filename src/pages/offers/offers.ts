import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the OffersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-offers',
  templateUrl: 'offers.html',
})
export class OffersPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
  }
  offersData :any;
  ionViewDidLoad() {
    this.http.get("http://183.82.112.165:5000/api/coffee/v1/offers/customer").subscribe(
      data => {
        this.offersData = data;
        this.offersData = this.offersData.offers;
    },

    error => {console.log(error.status); 
      if(error.status == 401)
      {
        //this.navCtrl.push(LoginPage);
      }
  });

  }

}

import { Http,  Headers, RequestOptions  } from '@angular/http';
//import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AuthService} from '../../providers/auth/auth.service';
import { Events } from 'ionic-angular';

/**
 * Generated class for the RatingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rating',
  templateUrl: 'rating.html',
})
export class RatingPage {
  rating :any;
  access_token_cookie :any;
  result :any;
  ratedata :any;
  coffees : any;
  coffee_number : any;
  scannedCode : any;
  constructor(public navCtrl: NavController,
    public navParams: NavParams, 
    public http: Http, 
    public auth: AuthService,
     public events: Events) {
      this.ratedata = navParams.get('data');
      this.coffee_number = navParams.get('x');
      console.log(this.coffee_number, "x");
      console.log(this.ratedata,"rate data");
      this.coffees = this.ratedata.coffees;
      events.subscribe('star-rating:changed', (starRating) => {console.log(starRating);this.rating=starRating});
  }
  
  
  ionViewDidLoad() {
    
  }
 
  submit(){
    let headers = new Headers();
      this.access_token_cookie = localStorage.getItem('access_token_cookie')
      headers.append("Authorization" , `Bearer ${this.auth.getToken()}`);
      headers.append('access_token_cookie', this.access_token_cookie);
      headers.append("Content-Type", "application/json");
      const requestOptions  = new RequestOptions({ headers : headers });
      var url = "http://183.82.112.165:5000/api/coffee/v1/rating";
      var body = JSON.stringify({"rating":this.rating,
                             "business_publicname":this.ratedata.retailer, 
                            "retailer_id":this.ratedata.retailer_id,
                            "coffees":this.coffees,
                          "no":this.coffee_number});
      console.log(body)
      this.http.patch(url, body ,requestOptions).subscribe(data => {
        
        this.result=data.json();
        console.log(this.result);
      }, error => {alert(error);})
    this.navCtrl.pop();
  }

}

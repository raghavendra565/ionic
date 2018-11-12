import { LoginPage } from './../login/login';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';


/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HttpClient) {
  }
  submitted = false;
  profileData:any;
  username : any;
  first_name: any;
  last_name: any;
  yob : any;
  email:any;
  post_code :any;
  coffee_free_availed :any;
  coffee_total : any;
  ionViewDidLoad() {
    this.http.get("http://183.82.112.165:5000/api/coffee/v1/profile/customer").subscribe(
      data => {this.profileData=data;
      //this.profileData = JSON.stringify(this.profileData)
      this.username = this.profileData["profile"]["username"];
      this.coffee_total= this.profileData["profile"]["coffee_total"];
      this.coffee_free_availed= this.profileData["profile"]["coffee_free_availed"];
      this.post_code= this.profileData["profile"]["post_code"];
      this.email= this.profileData["profile"]["email"];
      this.first_name= this.profileData["profile"]["first_name"];
      this.last_name= this.profileData["profile"]["last_name"];
      this.yob= this.profileData["profile"]["yob"];
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
  onNextPage(){
    localStorage.removeItem("access_token_cookie");
    localStorage.removeItem("refresh_token_cookie");
    this.navCtrl.setRoot(LoginPage);
  }

}

import { Http, Headers, RequestOptions } from '@angular/http';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { ThrowStmt } from '@angular/compiler';
import {LoginPage} from '../login/login';
/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  username : any;
  first_name: any;
  last_name: any;
  yob : any;
  email:any;
  post_code :any;
  password:any;
  result:any;
  msg :any;
  signupMsg :any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http) {
  }
  ionViewDidLoad() {
  }
  signup(){
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    let options = new RequestOptions({ headers : headers });
    var url = "http://183.82.112.165:5000/api/coffee/v1/signup/customer";
    var body = JSON.stringify({"data":{mobile : this.username,
                                           password: this.password,
                                           first_name : this.first_name,
                                           last_name : this.last_name,
                                           yob : this.yob,
                                           email : this.email,
                                           post_code: this.post_code,
                                          }});
    if(this.username != null && this.password != null && this.yob != null && this.first_name !=null
           && this.email != null && this.last_name != null && this.post_code != null){
        this.http.post(url, body ,options).subscribe(
              data => {this.result=data;var res = data.json();
                  this.msg = res.msg;
                  this.signupMsg = res.signup;
                  alert("SignedUp Successfully");
                  if(this.signupMsg == true){
                    this.navCtrl.push(LoginPage);
                  }
                }, error => {alert(this.msg); 
                console.log(error)}); 
        }
        else {
            alert("all fields are required");
        }
  }

}

import { HomePage } from '../../pages/home/home';
import { Component, Input } from '@angular/core';
import { NavController,ViewController } from 'ionic-angular';
import {ForgotPasswordPage} from '../../pages/forgot-password/forgot-password';
import {SignupPage} from '../../pages/signup/signup';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';
//import { map } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';
/**
 * Generated class for the LoginComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */

@Component({
  selector: 'login',
  templateUrl: 'login.html'
})
export class LoginComponent {
  @Input() data: any;
  @Input() events: any;

    public result : any;
    public phone: string;
    public password: string;
    public msg : any;
    constructor(public navCtrl: NavController, private http: Http, private cookieService : CookieService, private viewCtrl: ViewController) { }
    ionViewWillEnter() {
        this.viewCtrl.showBackButton(false);
      }
    onNextPage(){
        let headers = new Headers();
        var username = this.phone;
        var password = this.password;
        headers.append("Authorization", "Basic " + btoa(username + ":" + password));
        headers.append("Content-Type", "application/json");
        let options = new RequestOptions({ headers : headers });
        var url = "http://183.82.112.165:5000/api/coffee/v1/login/customer";
        var body = JSON.stringify({"data":{username : username, password: password}});
        if(username != null && password != null){
            this.http.post(url, body ,options).subscribe(
                data => {this.result=data;
                    var res = data.json();
                    
                  localStorage.setItem('access_token_cookie', res.access_token);
                  localStorage.setItem('refresh_token_cookie', res.refresh_token);
                  
                  this.msg = res.info;
                  if(res.msg == true){
                    this.cookieService.set("access_token_cookie",res.access_token);
                    this.cookieService.set("refresh_token_cookie",res.refresh_token);
                    //this.router.navigate(['retailerDashboard']);
                    this.navCtrl.setRoot(HomePage);
                  }
                  else {
                      alert(this.msg);
                  }
                }, error => {alert(this.msg); 
                console.log(error)}); 
        }
        else {
            alert("phone and password are required");
        }   
    }
    onEvent = (event: string): void => {
         
        if (this.events[event]) {
            this.events[event]({
                'username': this.phone,
                'password': this.password
            });
        }   
    }
    forgot(){
        this.navCtrl.push(ForgotPasswordPage);
    }
    signup(){
        this.navCtrl.push(SignupPage);
    }
}

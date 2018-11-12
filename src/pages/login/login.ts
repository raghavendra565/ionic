import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginServiceProvider } from '../../providers/login-service/login-service';
import { ToastService } from '../../providers/toast-service/toast-service';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [
    LoginServiceProvider,
    ToastService
  ]
})
export class LoginPage {
   /*  Necessary data and events
      ================================*/
    data : {};
    events: {};
    pages: Array<{title: string, component: any}>;

    constructor(public navCtrl: NavController, public navParams: NavParams, public service: LoginServiceProvider, private toastCtrl: ToastService) {
      this.data = this.service.getDataForLoginFlat();
      this.events =  {
         "onLogin" : this.onLogin
      }
      this.pages = [
        { title: 'Login', component:"LoginFlatPage" },
      ];
    }

    /*  Todo override this function with your logic
    =================================================*/
    onLogin = (params): void => {
      this.toastCtrl.presentToast('Login Now');  
    };

  ionViewDidLoad() {
    //console.log(localStorage.getItem("access_token_cookie"));
    //console.log(localStorage.getItem("refresh_token_cookie"));
    if((localStorage.getItem("access_token_cookie") != null ) && (localStorage.getItem("refresh_token_cookie"))){
      this.navCtrl.setRoot(HomePage);
    }
  }

}

import { Component } from '@angular/core';
import { Platform, ModalController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SplashPage } from '../pages/splash/splash';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = "LoginPage";

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, modalCtrl: ModalController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      //statusBar.overlaysWebView(true);
      statusBar.backgroundColorByHexString('#bb9175');
      //splashScreen.hide();
      let splash = modalCtrl.create(SplashPage);
      splash.present();
    });
  }
}


import { RatingPage } from './../pages/rating/rating';
import { HomePage } from '../pages/home/home';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
//import {QRScanner} from "@ionic-native/qr-scanner"; 
//import { QRCodeModule } from 'angular2-qrcode';
import { LoginServiceProvider } from '../providers/login-service/login-service';
import { ToastService } from '../providers/toast-service/toast-service';
import { AppSettings } from '../providers/app-settings';
import { AngularFireModule } from 'angularfire2';

import { StarRatingModule } from 'ionic3-star-rating';
import {ProfilePage} from '../pages/profile/profile';
import {WalletPage} from '../pages/wallet/wallet';
import {OffersPage} from '../pages/offers/offers';
import {SplashPage} from '../pages/splash/splash';
import {ForgotPasswordPage} from '../pages/forgot-password/forgot-password';
import {CardPage} from '../pages/card/card';
import {ScannerPage} from '../pages/scanner/scanner';
import { NgQrScannerModule } from 'angular2-qrscanner';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import {SignupPage} from '../pages/signup/signup';
import {AngularScannerPage} from '../pages/angular-scanner/angular-scanner';
import { HttpModule }    from '@angular/http';
import { CookieService } from 'ngx-cookie-service';
import { HttpClientModule } from '@angular/common/http';
import {TokenInterceptor} from '../providers/auth/token.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import {AuthService} from '../providers/auth/auth.service';
import {JwtInterceptor} from '../providers/auth/jwt.interceptor';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ProfilePage,
    WalletPage,
    OffersPage,
    SplashPage,
    ForgotPasswordPage,
    CardPage,
    ScannerPage,
    SignupPage,
    AngularScannerPage,
    RatingPage
  ],
  imports: [
    BrowserModule,
    //QRCodeModule,
    IonicModule.forRoot(MyApp),
    StarRatingModule,
    NgQrScannerModule,
    NgxQRCodeModule,
    HttpModule,
    HttpClientModule,
    AngularFireModule.initializeApp(AppSettings.FIREBASE_CONFIG)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ProfilePage,
    WalletPage,
    OffersPage,
    SplashPage,
    ForgotPasswordPage,
    CardPage,
    ScannerPage,
    SignupPage,
    AngularScannerPage,
    RatingPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    CookieService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    //QRScanner,
    BarcodeScanner,
    LoginServiceProvider,
    AuthService,
    JwtInterceptor,
    ToastService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ]
})
export class AppModule {}

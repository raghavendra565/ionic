import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { LoginComponent } from './login/login';
//import { QrCodeScannerComponent } from "./qr-code-scanner/qr-code-scanner";
import { LoginYellowComponent } from './login-yellow/login-yellow';
import { ProfileComponent } from './profile/profile';
import { WalletComponent } from './wallet/wallet';
import { OffersComponent } from './offers/offers';
import { HttpModule }    from '@angular/http';

@NgModule({
	declarations: [
	LoginComponent,
    //QrCodeScannerComponent,
    LoginYellowComponent,
    ProfileComponent,
    WalletComponent,
    OffersComponent,
	],
	imports: [
		IonicPageModule.forChild(LoginComponent),
		HttpModule
		//IonicPageModule.forChild(QrCodeScannerComponent),
	],
	exports: [
		LoginComponent,
    //QrCodeScannerComponent,
    LoginYellowComponent,
    //ProfileComponent,
    WalletComponent,
    OffersComponent,
	],
	schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class ComponentsModule {}

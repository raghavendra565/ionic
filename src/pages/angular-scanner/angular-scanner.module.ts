import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AngularScannerPage } from './angular-scanner';
import { NgxQRCodeModule } from 'ngx-qrcode2';
@NgModule({
  declarations: [
    AngularScannerPage,
  ],
  imports: [
    IonicPageModule.forChild(AngularScannerPage),
    NgxQRCodeModule
  ],
})
export class AngularScannerPageModule {}

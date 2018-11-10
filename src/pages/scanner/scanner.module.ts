import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ScannerPage } from './scanner';
//import { QrCodeScannerComponent } from '../../components/qr-code-scanner/qr-code-scanner';
//import { ComponentsModule } from '../../components/components.module';
import {QrCodeScannerComponentModule} from '../../components/qr-code-scanner/qr-code-scanner.module';

@NgModule({
  declarations: [
    ScannerPage,
  ],
  imports: [
    IonicPageModule.forChild(ScannerPage),
    //QrCodeScannerComponent,
    //ComponentsModule,
    QrCodeScannerComponentModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class ScannerPageModule {}

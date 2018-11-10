import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {QrCodeScannerComponent} from './qr-code-scanner';

@NgModule({
    declarations: [
        QrCodeScannerComponent,
    ],
    imports: [
        IonicPageModule.forChild(QrCodeScannerComponent),
    ],
    exports: [
        QrCodeScannerComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class QrCodeScannerComponentModule { }
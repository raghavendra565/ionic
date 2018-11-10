import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WalletPage } from './wallet';
import {CardPage} from '../card/card';

@NgModule({
  declarations: [
    WalletPage,
    CardPage
  ],
  imports: [
    IonicPageModule.forChild(WalletPage),
    CardPage
  ],
})
export class WalletPageModule {}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CardPage } from './card';
import { StarRatingModule } from 'ionic3-star-rating';

@NgModule({
  declarations: [
    CardPage,
  ],
  imports: [
    IonicPageModule.forChild(CardPage),
    StarRatingModule
  ],
})
export class CardPageModule {}

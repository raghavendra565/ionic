import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfilePage } from './profile';

//import { ComponentsModule } from '../../components/components.module';
import { ProfileComponent } from '../../components/profile/profile'
@NgModule({
  declarations: [
    ProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(ProfilePage),
    //IonicPageModule.forChild(ProfileComponent),
    ProfileComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProfilePageModule {}

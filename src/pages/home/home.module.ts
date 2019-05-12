import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import { SuperTabsModule } from '../../../node_modules/ionic2-super-tabs';

@NgModule({
  declarations: [
 
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
    SuperTabsModule
  ],
})
export class HomePageModule {}

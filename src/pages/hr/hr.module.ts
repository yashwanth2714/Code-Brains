import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HrPage } from './hr';
//import { AppModule } from '../../app/app.module';
//import { CommonModule } from '../../../node_modules/@angular/common';


@NgModule({
  declarations: [
HrPage   

  ],
  imports: [
    IonicPageModule.forChild(HrPage),

  ],
})
export class HrPageModule {}

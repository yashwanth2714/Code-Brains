import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TechnicalPage } from './technical';
//import { AccordionComponent } from '../../components/accordion/accordion';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    TechnicalPage,
   // AccordionComponent
  ],
  imports: [
    IonicPageModule.forChild(TechnicalPage),
    ComponentsModule
    
  ],
})
export class TechnicalPageModule {}

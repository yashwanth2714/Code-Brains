import { NgModule } from '@angular/core';
import { AccordionComponent } from './accordion/accordion';
import { IonicModule } from '../../node_modules/ionic-angular';
@NgModule({
	declarations: [AccordionComponent],
	imports: [
		IonicModule
	],
	exports: [AccordionComponent]
})
export class ComponentsModule {}

import { Component, ViewChild, OnInit, Renderer, Input } from '@angular/core';
import { NavController } from '../../../node_modules/ionic-angular/navigation/nav-controller';

import { NavParams } from '../../../node_modules/ionic-angular/navigation/nav-params';
import { TopicPage } from '../../pages/topic/topic';
import { CodingPage } from '../../pages/coding/coding';

/**
 * Generated class for the AccordionComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'accordion',
  templateUrl: 'accordion.html'
})
export class AccordionComponent implements OnInit {

  accordionExapanded = false;
  @ViewChild("cc") cardContent: any;
  @Input('title') title: string;

  icon: string = "arrow-dropright";
  rootNavCtrl: NavController
  constructor(public renderer: Renderer,public navCtrl: NavController,  public navParams: NavParams) {
    this.rootNavCtrl = this.navParams.get('rootNavCtrl');
  }

  ngOnInit() {
    console.log(this.cardContent.nativeElement);
    this.renderer.setElementStyle(this.cardContent.nativeElement, "webkitTransition", "max-height 500ms, padding 500ms");
  }

  toggleAccordion() {
    if (this.accordionExapanded) {
      this.renderer.setElementStyle(this.cardContent.nativeElement, "max-height", "0px");
      this.renderer.setElementStyle(this.cardContent.nativeElement, "padding", "0px 0px");

    } else {
      this.renderer.setElementStyle(this.cardContent.nativeElement, "max-height", "500px");
      this.renderer.setElementStyle(this.cardContent.nativeElement, "padding", "0px 0px");

    }

    this.accordionExapanded = !this.accordionExapanded;
    this.icon = this.icon == "arrow-dropright" ? "arrow-dropdown" : "arrow-dropright";

  }
topicWise() {
this.rootNavCtrl.push(TopicPage);
}
coding() {
  this.rootNavCtrl.push(CodingPage);
}
}

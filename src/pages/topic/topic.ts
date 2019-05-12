import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CtheoryPage } from '../ctheory/ctheory';
import { OopstheoryPage } from '../oopstheory/oopstheory';
import { JavatheoryPage } from '../javatheory/javatheory';
import { HtmltheoryPage } from '../htmltheory/htmltheory';
import { DstheoryPage } from '../dstheory/dstheory';
import { PytheoryPage } from '../pytheory/pytheory';
import { SqltheoryPage } from '../sqltheory/sqltheory';
import { CsstheoryPage } from '../csstheory/csstheory';
import { IonictheoryPage } from '../ionictheory/ionictheory';

import { HomePage } from '../home/home';
import { HadooptheoryPage } from '../hadooptheory/hadooptheory';
import { JstheoryPage } from '../jstheory/jstheory';

/**
 * Generated class for the TopicPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-topic',
  templateUrl: 'topic.html',
})
export class TopicPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TopicPage');
  }
cth() {
  this.navCtrl.push(CtheoryPage);
}
oopsth() {
this.navCtrl.push(OopstheoryPage);
}
javath() {
  this.navCtrl.push(JavatheoryPage);
}
htmlth() {
  this.navCtrl.push(HtmltheoryPage);
}
dsth() {
  this.navCtrl.push(DstheoryPage);
}
pyth() {
  this.navCtrl.push(PytheoryPage);
}
sqlth() {
  this.navCtrl.push(SqltheoryPage);
}
cssth() {
this.navCtrl.push(CsstheoryPage);
}
ionicth() {
this.navCtrl.push(IonictheoryPage);
}
qui() {
  this.navCtrl.setRoot(HomePage);
}
hadoopth() {
  this.navCtrl.push(HadooptheoryPage);
}
jsth() {
  this.navCtrl.push(JstheoryPage);
}

}

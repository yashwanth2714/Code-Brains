import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CprogPage } from '../cprog/cprog';
import { OopsprogPage } from '../oopsprog/oopsprog';
import { JavaprogPage } from '../javaprog/javaprog';
import { HtmlprogPage } from '../htmlprog/htmlprog';
import { DsprogPage } from '../dsprog/dsprog';
import { PyprogPage } from '../pyprog/pyprog';
import { CssprogPage } from '../cssprog/cssprog';
import { SqlprogPage } from '../sqlprog/sqlprog';
import { IonicprogPage } from '../ionicprog/ionicprog';
import { HadoopprogPage } from '../hadoopprog/hadoopprog';
import { JsprogPage } from '../jsprog/jsprog';

/**
 * Generated class for the CodingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-coding',
  templateUrl: 'coding.html',
})
export class CodingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CodingPage');
  }
cpro() {
this.navCtrl.push(CprogPage);
}
oopspro() {
  this.navCtrl.push(OopsprogPage);
}
javapro() {
  this.navCtrl.push(JavaprogPage);
}
htmlpro() {
  this.navCtrl.push(HtmlprogPage);
}
dspro() {
  this.navCtrl.push(DsprogPage);
}
pypro() {
  this.navCtrl.push(PyprogPage);
}
csspro() {
  this.navCtrl.push(CssprogPage);
}
sqlpro() {
  this.navCtrl.push(SqlprogPage);
}
ionicpro() {
  this.navCtrl.push(IonicprogPage);
}
hadooppro() {
  this.navCtrl.push(HadoopprogPage);
}
jspro() {
  this,this.navCtrl.push(JsprogPage);
}
}

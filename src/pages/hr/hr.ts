import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { H1Page } from '../h1/h1';
import { H2Page } from '../h2/h2';
import { H3Page } from '../h3/h3';
import { H4Page } from '../h4/h4';
import { H5Page } from '../h5/h5';
import { H6Page } from '../h6/h6';
import { H7Page } from '../h7/h7';
import { H8Page } from '../h8/h8';
import { H9Page } from '../h9/h9';
import { H10Page } from '../h10/h10';
import { H11Page } from '../h11/h11';
import { H12Page } from '../h12/h12';
import { H13Page } from '../h13/h13';
import { H14Page } from '../h14/h14';
import { H15Page } from '../h15/h15';
import { H16Page } from '../h16/h16';
import { H17Page } from '../h17/h17';
import { H18Page } from '../h18/h18';
import { H19Page } from '../h19/h19';
import { H20Page } from '../h20/h20';
import { H21Page } from '../h21/h21';
import { H22Page } from '../h22/h22';
import { H40Page } from '../h40/h40';
import { H23Page } from '../h23/h23';
import { H24Page } from '../h24/h24';
import { H25Page } from '../h25/h25';
import { H26Page } from '../h26/h26';
import { H27Page } from '../h27/h27';
import { H28Page } from '../h28/h28';
import { H29Page } from '../h29/h29';
import { H30Page } from '../h30/h30';
import { H39Page } from '../h39/h39';
import { H38Page } from '../h38/h38';
import { H37Page } from '../h37/h37';
import { H31Page } from '../h31/h31';
import { H32Page } from '../h32/h32';
import { H33Page } from '../h33/h33';
import { H34Page } from '../h34/h34';
import { H35Page } from '../h35/h35';
import { H36Page } from '../h36/h36';
/**
 * Generated class for the HrPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-hr',
  templateUrl: 'hr.html',
})
export class HrPage {
//public yash:Array<any>=[]
rootNavCtrl: NavController
  constructor(public navCtrl: NavController, public navParams: NavParams) {
 /* this.yash.push({
    name:'1a',
    heading:'yashwanth kumar guntur yashwanth kumar guntur yashwanth kumar',
    color:'red',
    click: 'HomePage'
  },{
    name:'2a',
    heading:'guntur yashwanth kumar',
    color:'yellow'
  });*/
  this.rootNavCtrl = this.navParams.get('rootNavCtrl');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HrPage');
  }
go() {
  this.navCtrl.push(HomePage);
}
h1p() {
  this.rootNavCtrl.push(H1Page);
}
h2p() {
  this.rootNavCtrl.push(H2Page);
}
h3p() {
  this.rootNavCtrl.push(H3Page);
}
h4p() {
  this.rootNavCtrl.push(H4Page);
}
h5p() {
  this.rootNavCtrl.push(H5Page);
}
h6p() {
  this.rootNavCtrl.push(H6Page);
}
h7p() {
  this.rootNavCtrl.push(H7Page);
}
h8p() {
  this.rootNavCtrl.push(H8Page);
}
h9p() {
  this.rootNavCtrl.push(H9Page);
}
h10p() {
  this.rootNavCtrl.push(H10Page);
}
h11p() {
  this.rootNavCtrl.push(H11Page);
}
h12p() {
  this.rootNavCtrl.push(H12Page);
}
h13p() {
  this.rootNavCtrl.push(H13Page);
}
h14p() {
  this.rootNavCtrl.push(H14Page);
}
h15p() {
  this.rootNavCtrl.push(H15Page);
}
h16p() {
  this.rootNavCtrl.push(H16Page);
}
h17p() {
  this.rootNavCtrl.push(H17Page);
}
h18p() {
  this.rootNavCtrl.push(H18Page);
}
h19p() {
  this.rootNavCtrl.push(H19Page);
}
h20p() {
  this.rootNavCtrl.push(H20Page);
}
h21p() {
  this.rootNavCtrl.push(H21Page);
}
h22p() {
  this.rootNavCtrl.push(H22Page);
}
h23p() {
  this.rootNavCtrl.push(H23Page);
}

h24p() {
  this.rootNavCtrl.push(H24Page);
}

h25p() {
  this.rootNavCtrl.push(H25Page);
}

h26p() {
  this.rootNavCtrl.push(H26Page);
}


h27p() {
  this.rootNavCtrl.push(H27Page);
}

h28p() {
  this.rootNavCtrl.push(H28Page);
}

h29p() {
  this.rootNavCtrl.push(H29Page);
}

h30p() {
  this.rootNavCtrl.push(H30Page);
}

h31p() {
  this.rootNavCtrl.push(H31Page);
}

h32p() {
  this.rootNavCtrl.push(H32Page);
}

h33p() {
  this.rootNavCtrl.push(H33Page);
}

h34p() {
  this.rootNavCtrl.push(H34Page);
}
h35p() {
  this.rootNavCtrl.push(H35Page);
}
h36p() {
  this.rootNavCtrl.push(H36Page);
}

h37p() {
  this.rootNavCtrl.push(H37Page);
}

h38p() {
  this.rootNavCtrl.push(H38Page);
}

h39p() {
  this.rootNavCtrl.push(H39Page);
}


h40p() {
  this.rootNavCtrl.push(H40Page);
}



}

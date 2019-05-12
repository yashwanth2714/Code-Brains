import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SuperTabs } from 'ionic2-super-tabs';
/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  pages = [
    { pageName: 'TechnicalPage', title: 'Technical Interview', icon: 'home', id: 'technicalTab'},
    { pageName: 'HrPage', title: 'HR Interview', icon: 'contact', id: 'hrTab'},
    { pageName: 'BodylangPage', title: 'Body Language ', icon: 'body', id: 'bodylangTab'},
    { pageName: 'InviewtipsPage', title: 'Interview ', icon: 'man', id: 'inviewTab'},
    { pageName: 'GdPage', title: 'Group Discussion ', icon: 'people', id: 'gdTab'}
   
  ];

  selectedTab = 0;

  @ViewChild(SuperTabs) superTabs : SuperTabs;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  onTabSelect(ev: any) {
   
   
      this.selectedTab = ev.index;
      this.superTabs.clearBadge(this.pages[ev.index].id)
   
  }

}

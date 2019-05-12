import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { SuperTabsModule } from 'ionic2-super-tabs'; 
import { TopicPage } from '../pages/topic/topic';
//technical theory pages
import { CtheoryPage } from '../pages/ctheory/ctheory';
import { CodingPage } from '../pages/coding/coding';
import { CprogPage } from '../pages/cprog/cprog';

import { OopstheoryPage } from '../pages/oopstheory/oopstheory';
import { JavatheoryPage } from '../pages/javatheory/javatheory';
import { HtmltheoryPage } from '../pages/htmltheory/htmltheory';
import { DstheoryPage } from '../pages/dstheory/dstheory';
import { PytheoryPage } from '../pages/pytheory/pytheory';
import { SqltheoryPage } from '../pages/sqltheory/sqltheory';
import { CsstheoryPage } from '../pages/csstheory/csstheory';
//import { IonictheoryPage } from '../pages/ionictheory/ionictheory';
//technical coding pages
import { OopsprogPage } from '../pages/oopsprog/oopsprog';
import { JavaprogPage } from '../pages/javaprog/javaprog';
import { HtmlprogPage } from '../pages/htmlprog/htmlprog';
import { DsprogPage } from '../pages/dsprog/dsprog';
import { PyprogPage } from '../pages/pyprog/pyprog';
import { CssprogPage } from '../pages/cssprog/cssprog';
import { SqlprogPage } from '../pages/sqlprog/sqlprog';
//import { IonicprogPage } from '../pages/ionicprog/ionicprog';
//hr pages
import { H1Page } from '../pages/h1/h1';
import { H20Page } from '../pages/h20/h20';
import { H2Page } from '../pages/h2/h2';
import { H3Page } from '../pages/h3/h3';
import { H4Page } from '../pages/h4/h4';
import { H5Page } from '../pages/h5/h5';
import { H6Page } from '../pages/h6/h6';
import { H7Page } from '../pages/h7/h7';
import { H8Page } from '../pages/h8/h8';
import { H9Page } from '../pages/h9/h9';
import { H10Page } from '../pages/h10/h10';
import { H11Page } from '../pages/h11/h11';
import { H12Page } from '../pages/h12/h12';
import { H13Page } from '../pages/h13/h13';
import { H14Page } from '../pages/h14/h14';
import { H15Page } from '../pages/h15/h15';
import { H16Page } from '../pages/h16/h16';
import { H17Page } from '../pages/h17/h17';
import { H18Page } from '../pages/h18/h18';
import { H19Page } from '../pages/h19/h19';
import { H21Page } from '../pages/h21/h21';
import { H22Page } from '../pages/h22/h22';
import { H24Page } from '../pages/h24/h24';
import { H25Page } from '../pages/h25/h25';
import { H26Page } from '../pages/h26/h26';
import { H27Page } from '../pages/h27/h27';
import { H28Page } from '../pages/h28/h28';
import { H29Page } from '../pages/h29/h29';
import { H30Page } from '../pages/h30/h30';
import { H32Page } from '../pages/h32/h32';
import { H33Page } from '../pages/h33/h33';
import { H34Page } from '../pages/h34/h34';
import { H36Page } from '../pages/h36/h36';
import { H37Page } from '../pages/h37/h37';
import { H38Page } from '../pages/h38/h38';
import { H39Page } from '../pages/h39/h39';
import { H40Page } from '../pages/h40/h40';
import { H35Page } from '../pages/h35/h35';
import { H31Page } from '../pages/h31/h31';
import { H23Page } from '../pages/h23/h23';
import { HadooptheoryPage } from '../pages/hadooptheory/hadooptheory';
import { JstheoryPage } from '../pages/jstheory/jstheory';
import { HadoopprogPage } from '../pages/hadoopprog/hadoopprog';
import { JsprogPage } from '../pages/jsprog/jsprog';
import { AboutPage } from '../pages/about/about';
import { InviewmistakesPage } from '../pages/inviewmistakes/inviewmistakes';
/*
import { HrPage } from '../pages/hr/hr';
import { BodylangPage } from '../pages/bodylang/bodylang';
import { InviewtipsPage } from '../pages/inviewtips/inviewtips';
import { GdPage } from '../pages/gd/gd';
*/
/*
import { HrPage } from '../pages/hr/hr';
import { BodylangPage } from '../pages/bodylang/bodylang';
import { InviewtipsPage } from '../pages/inviewtips/inviewtips';
import { GdPage } from '../pages/gd/gd';*/
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    TopicPage,
 
    CodingPage,
    CtheoryPage,
    OopstheoryPage,
    JavatheoryPage,
    HtmltheoryPage,
    DstheoryPage,
    PytheoryPage,
    SqltheoryPage,
    CsstheoryPage,
  //  IonictheoryPage,
    CprogPage,
    OopsprogPage,
    JavaprogPage,
    HtmlprogPage,
    DsprogPage,
    PyprogPage,
    CssprogPage,
    SqlprogPage,
  //  IonicprogPage,
    H1Page,
    H2Page,
    H3Page,
    H4Page,
    H5Page,
    H6Page,
    H7Page,
    H8Page,
    H9Page,
    H10Page,
    H11Page,
    H12Page,
    H13Page,
    H14Page,
    H15Page,
    H16Page,
    H17Page,
    H18Page,
    H19Page,
    H20Page,
    H21Page,
    H22Page,
    H23Page,
    H24Page,
    H25Page,
    H26Page,
    H27Page,
    H28Page,
    H29Page,
    H30Page,
    H31Page,
    H32Page,
    H33Page,
    H34Page,
    H35Page,
    H36Page,
    H37Page,
    H38Page,
    H39Page,
    H40Page,
    HadooptheoryPage,
    JstheoryPage,
    HadoopprogPage,
    JsprogPage,
    AboutPage,
    InviewmistakesPage
  ],
  imports: [
    BrowserModule,
  SuperTabsModule.forRoot(),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    TopicPage,
    
    CodingPage,
    CtheoryPage,
    OopstheoryPage,
    JavatheoryPage,
    HtmltheoryPage,
    DstheoryPage,
    PytheoryPage,
    SqltheoryPage,
    CsstheoryPage,
   // IonictheoryPage,
    CprogPage,
    OopsprogPage,
    JavaprogPage,
    HtmlprogPage,
    DsprogPage,
    PyprogPage,
    CssprogPage,
    SqlprogPage,
   // IonicprogPage,
    H1Page,
    H2Page,
    H3Page,
    H4Page,
    H5Page,
    H6Page,
    H7Page,
    H8Page,
    H9Page,
    H10Page,
    H11Page,
    H12Page,
    H13Page,
    H14Page,
    H15Page,
    H16Page,
    H17Page,
    H18Page,
    H19Page,
    H20Page,
    H21Page,
    H22Page,
    H23Page,
    H24Page,
    H25Page,
    H26Page,
    H27Page,
    H28Page,
    H29Page,
    H30Page,
    H31Page,
    H32Page,
    H33Page,
    H34Page,
    H35Page,
    H36Page,
    H37Page,
    H38Page,
    H39Page,
    H40Page,
    HadooptheoryPage,
    JstheoryPage,
    HadoopprogPage,
    JsprogPage,
    AboutPage,
    InviewmistakesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

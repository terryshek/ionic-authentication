import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {UserpagePage} from '../userpage/userpage';
import {SharingPage} from '../sharing/sharing';
import {DashbroadPage} from '../dashbroad/dashbroad';

/*
  Generated class for the TabPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/tab/tab.html',
})
export class TabPage {
  private tab1Root: any;
  private tab2Root: any;
  private tab3Root: any;
  

  constructor(private nav: NavController) {
    this.tab3Root = DashbroadPage;
    this.tab2Root = SharingPage;
    this.tab1Root = UserpagePage;
  }

}

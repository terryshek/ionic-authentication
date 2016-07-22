import { Component,ViewChild} from '@angular/core';
import { Nav, MenuController } from 'ionic-angular';
import {TabPage} from "../tab/tab"
/*
  Generated class for the LeftMenuPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/left-menu/left-menu.html',
})
export class LeftMenuPage {
   @ViewChild(Nav) nav: Nav;
  public rootPage = TabPage;

  constructor(private menu: MenuController) {
    console.log("left-menu")
  }
  openMenu() {
   this.menu.open();
 }

 closeMenu() {
   this.menu.close();
 }

 toggleMenu() {
   this.menu.toggle();
 }


}

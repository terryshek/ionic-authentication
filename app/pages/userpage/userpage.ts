import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {LoginPage} from '../login/login';
import {Authservice} from "../../providers/authservice/authservice"
/*
  Generated class for the UserpagePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/userpage/userpage.html',
  providers:[Authservice]
})
export class UserpagePage {

  constructor(private nav: NavController, private service:Authservice) {

  }
  logout() {
    this.service.logout();
    // this.nav.setRoot(LoginPage);
    this.nav.rootNav.setRoot(LoginPage);
 }
}

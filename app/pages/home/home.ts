import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {UserpagePage} from '../userpage/userpage';
import {LoginPage} from '../login/login';
import {Authservice} from "../../providers/authservice/authservice"
/*
  Generated class for the HomePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/home/home.html',
  providers: [Authservice]
})
export class HomePage {

  constructor(private nav: NavController, private authservice:Authservice) {

  }

}

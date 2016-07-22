import { Component, OnInit } from '@angular/core';
import { NavController} from 'ionic-angular';
import {Authservice} from "../../providers/authservice/authservice"
import {UserpagePage} from '../userpage/userpage';
import {SignupPage} from '../signup/signup';
import {TabPage} from '../tab/tab';
import {LeftMenuPage} from '../left-menu/left-menu';
/*
  Generated class for the LoginPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/login/login.html',
  providers: [Authservice]
})
export class LoginPage implements OnInit {
  public usercreds = {
            name: '',
            password: ''
        }
  constructor(private nav: NavController, private myservice:Authservice) {
    console.log(window.localStorage.getItem('loginToken'));
  }
  ngOnInit(){
    console.log(this.myservice);
  }

  formSubmit(usercreds) {
        this.myservice.login(usercreds).then(data => {
          console.log(data);
            if(data)
                this.nav.setRoot(LeftMenuPage);
        })
    }
  register(){
      this.nav.push(SignupPage);
  }
}

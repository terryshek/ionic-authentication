import { Component } from '@angular/core';
import { Page, NavController, Alert } from 'ionic-angular';
import { HomePage } from "../home/home";
import { UserpagePage } from "../userpage/userpage";
import { Authservice} from "../../providers/authservice/authservice"

/*
  Generated class for the SignupPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/signup/signup.html',
})
export class SignupPage {

  constructor(private nav: NavController, private myservice:Authservice) {

  }
  register(newcreds) {
        this.myservice.register(newcreds).then(data => {
            if(data){
                this.nav.setRoot(HomePage);
            }
                
        })
    }
}

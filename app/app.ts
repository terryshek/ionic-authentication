import {Component, provide} from '@angular/core';
import {Platform, ionicBootstrap} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {HomePage} from './pages/home/home';
import { Reviews } from "./providers/reviews/reviews"
import { LoginPage } from "./pages/login/login";
import { LeftMenuPage } from "./pages/left-menu/left-menu"





@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>'
})
export class MyApp {
  rootPage: any = (window.localStorage.getItem('loginToken'))?LoginPage:LeftMenuPage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }
}

ionicBootstrap(MyApp, [Reviews, provide('ApiEndpoint', {useValue: 'http://localhost:8080'})]);

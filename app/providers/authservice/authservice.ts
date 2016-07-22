import { NavController, Toast } from 'ionic-angular'
import { Injectable, Inject} from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Authservice provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Authservice {
  data: any;
  private isLoggedin: boolean;

  constructor(private http: Http, private nav: NavController, @Inject('ApiEndpoint') private apiEndpoint: string) {
    this.data = null;
    this.isLoggedin = false;
  }
  login(user) {
    var headers = new Headers();
    var creds = "name=" + user.name + "&password=" + user.password;
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    return new Promise(resolve => {

      this.http.post(`${this.apiEndpoint}/authenticate`, creds, { headers: headers })
        .map(res => res.json())
        .subscribe(data => {
          console.log(data)
          if (data.success) {
            this.showToast('top', "Login success !");
            window.localStorage.setItem('loginToken', data.token);
            this.isLoggedin = true;
          }else{
            this.showToast('top', data.msg);
          }
          resolve(this.isLoggedin);
        });
    });
  }
   showToast(position: string, message:string) {
    let toast = Toast.create({
      message: message,
      duration: 2000,
      position: position
    });

    this.nav.present(toast);
  }
  register(user) {
    return new Promise(resolve => {
      var creds = "name=" + user.name + "&password=" + user.password;
      var headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');
      this.http.post(`${this.apiEndpoint}/adduser`, creds, { headers: headers })
      .map(res => res.json())
      .subscribe(data => {
        if (data.json().success)
          resolve(true);
        else
          resolve(false);

      });
    });

  }
  
  logout() {
    this.isLoggedin = false;
    window.localStorage.clear();
  }
  load() {
    if (this.data) {
      // already loaded data
      return Promise.resolve(this.data);
    }

    // don't have the data yet
    return new Promise(resolve => {
      // We're using Angular Http provider to request the data,
      // then on the response it'll map the JSON data to a parsed JS object.
      // Next we process the data and resolve the promise with the new data.
      this.http.get('path/to/data.json')
        .map(res => res.json())
        .subscribe(data => {
          // we've got back the raw data, now generate the core schedule data
          // and save the data for later reference
          this.data = data;
          resolve(this.data);
        });
    });
  }
}


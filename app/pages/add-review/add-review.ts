import { Component } from '@angular/core';
import { NavController, ViewController} from 'ionic-angular';

/*
  Generated class for the AddReviewPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/add-review/add-review.html',
})
export class AddReviewPage {
  title: any;
  description: any;
  rating: any;
  constructor(private nav: NavController, public view:ViewController) {

  }
   save(): void {
 
    let review = {
        title: this.title,
        description: this.description,
        rating: this.rating
    };
 
    this.view.dismiss(review);
 
  }
 
  close(): void {
    this.view.dismiss();
  }

}

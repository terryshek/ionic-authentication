import {Component} from "@angular/core";
import {NavController, Modal} from 'ionic-angular';
import {AddReviewPage} from '../add-review/add-review';
import {Reviews} from '../../providers/reviews/reviews';
import {ExponentialStrengthPipe} from '../../pipes/myPipe';


@Component({
  templateUrl: 'build/pages/home/home.html',
  pipes: [ExponentialStrengthPipe]
})
export class HomePage {
  reviews: any;
  count:number = 10;

  constructor(private nav: NavController, private reviewService: Reviews) {

  }

  ionViewLoaded() {
    console.log("run")
    this.reviewService.getReviews().then((data) => {
      console.log(data);
      this.reviews = data;
    });

  }

  addReview() {

    let modal = Modal.create(AddReviewPage);

    modal.onDismiss(review => {
      if (review) {
        this.reviews.push(review);
        this.reviewService.createReview(review);
      }
    });

    this.nav.present(modal);

  }

  deleteReview(review) {

    //Remove locally
    let index = this.reviews.indexOf(review);

    if (index > -1) {
      this.reviews.splice(index, 1);
    }

    //Remove from database
    this.reviewService.deleteReview(review._id);
  }
}

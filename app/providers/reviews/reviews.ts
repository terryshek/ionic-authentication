import { Injectable,Inject} from '@angular/core';
import { Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Reviews provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Reviews {
  data: any;

  constructor(private http: Http,  @Inject('ApiEndpoint') private apiEndpoint: string) {
    this.data = null;
  }

  getReviews() {
    console.log(this.apiEndpoint);
    
    if (this.data) {
      // already loaded data
      return Promise.resolve(this.data);
    }

    // don't have the data yet
    return new Promise(resolve => {
      // We're using Angular Http provider to request the data,
      // then on the response it'll map the JSON data to a parsed JS object.
      // Next we process the data and resolve the promise with the new data.
      this.http.get(`${this.apiEndpoint}`)
        .map(res => res.json())
        .subscribe(data => {
          // we've got back the raw data, now generate the core schedule data
          // and save the data for later reference
          this.data = data;
          resolve(this.data);
        });
    });
  }
  createReview(review){
 
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
 
    this.http.post(`${this.apiEndpoint}`, JSON.stringify(review), {headers: headers})
      .subscribe(res => {
        console.log(res.json());
      });
 
  }
 
  deleteReview(id){
    this.http.delete(`${this.apiEndpoint}/${id}`).subscribe((res) => {
      console.log(res.json());
    });    
 
  }
}


import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent {
  name = 'IT255';
  data: Object[];

  constructor(private http: Http) {
    this.http.get('app/users.json').subscribe(
      data => {
        this.data = JSON.parse(data["_body"]);
      },
      err => console.log(err.text()),
      () => {
      }
    );
  }
}
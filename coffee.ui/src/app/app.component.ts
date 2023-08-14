import { Component } from '@angular/core';
import { CoffeerequestService } from './coffee/coffeerequest.service';
import { coffeeBuyResponse } from './models/coffeeBuyResponse.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CoffeerequestService]
})
export class AppComponent {
  title = 'todo';
  
  hasProcessed: boolean;
  responseMessage: string;


  constructor(private coffeeBuyService: CoffeerequestService) {
    this.hasProcessed = false;
    this.responseMessage = '';
  }

  onUpdate() {
    this.coffeeBuyService.postBuyCoffeeButton().subscribe( res => {
      if (res.result) {
        this.hasProcessed = true;
        this.responseMessage = res.message + ' ID:' + res.uuid;
      }
      console.log(res);
      console.log(this.hasProcessed);
    }, err => {
      console.log(err);
    });
  }
}

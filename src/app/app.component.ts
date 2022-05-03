import { Component } from '@angular/core';
import {Router, RouterEvent} from "@angular/router";
import {filter} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private _router: Router
  ) {
    document.body.className = 'onbording'
    this._router.events.pipe(
      filter(value => {
        // @ts-ignore
        if(value && value.url){
          return true
        }
        else return false
      })).subscribe(
      value => {
        if (value instanceof RouterEvent) {
            if(value.url.match(/portrait/) && document.body.className !== 'portrait'){
              document.body.classList.toggle("portrait");
              document.body.className = 'portrait'
            }
            else if (document.body.className !== 'onBoarding'){
              document.body.classList.toggle("onBoarding");
              document.body.className = 'onBoarding'
            }
        }
      }
    )
  }
}

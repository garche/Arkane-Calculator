import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Router} from "@angular/router";

@Component({
  selector: 'app-onbording',
  templateUrl: './onbording.component.html',
  styleUrls: ['./onbording.component.css']
})
export class OnbordingComponent {

  public date: FormControl;
  public valueIsValid: boolean = false;

  constructor(
    private _router: Router,
    private _formBuilder: FormBuilder,
  ) {
    this.date =  new FormControl([''])
  }

  public goToPortrait(){
    this._router.navigateByUrl(`/portrait/${this.date.value}`).then()
  }

  public userInputDate(){
    let date = this.date.value
    if(!date[date.length -1].match(/\d/)|| date.length === 11){
      this.date.setValue(date.replace(/.$/, ''));
    }
    else if(date.length === 3 || date.length === 6){
      const lastSymbol = date[date.length -1];
      this.date.setValue(date.replace(/.$/, '-')+lastSymbol)
    }
    this.checkValid(this.date.value)
  }

  private checkValid(value: string){
    if(value.length !== 10){
      this.valueIsValid = false
      return
    }
    this.valueIsValid = true
  }
}

import { Component } from '@angular/core';
import {FormBuilder, FormControl} from '@angular/forms';
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

  public openTapLink(){
    window.open("https://taplink.cc/katerina.putintseva")
  }

  public goToPortrait(){
    if(!this.valueIsValid){
      return
    }
    this.swapStyle()
  }

  public userInputDate(){
    if(!this.date.value){
      return
    }
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

  private swapStyle(){
    // @ts-ignore
    document.getElementById('button').style.color = '#CBA77C'
    // @ts-ignore
    document.getElementById('button').style.background = '#FFFFFF'
    setTimeout(()=> {
      // @ts-ignore
      document.getElementById('button').style.color = '#FFFFFF'
      // @ts-ignore
      document.getElementById('button').style.background = '#CBA77C'
      this._router.navigateByUrl(`/portrait/${this.date.value}`).then()

    },100)
  }

  private checkValid(value: string){
    if(value.length !== 10){
      this.valueIsValid = false
      return
    }
    const date: number[] = value.split('-').map(v=>parseInt(v));
    const isDate = new Date(date[2], date[1]-1, date[0])
    if (isDate.getFullYear() !== date[2] ||
        isDate.getMonth() !== date[1]-1 ||
        isDate.getDate() !== date[0]
      ){
      return
    }
    this.valueIsValid = true
  }
}

import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-arkane-portrait',
  templateUrl: './arcane-portrait.component.html',
  styleUrls: ['./arcane-portrait.component.css']
})
export class ArcanePortraitComponent implements OnInit {
  public date: string;
  public arcaneValue: number[] = []

  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) {
    this.date = this._activatedRoute.snapshot.params['date']
    if(!this.date){
      this._router.navigateByUrl(`/`).then()
    }
  }

  ngOnInit(): void {
    this.setArcaneValue(this.date.split('-'))
  }

  public openTapLink(){
    window.open("https://taplink.cc/katerina.putintseva")
  }

  private setArcaneValue(date: string[]) {
    this.arcaneValue[0] = this.razor(parseInt(date[0]));
    this.arcaneValue[1] = this.razor(parseInt(date[1]));
    this.arcaneValue[2] = this.razor(date[2].split('').map(v => parseInt(v)).reduce((sum, current) => sum + current, 0));
    this.arcaneValue[3] = this.razor(this.arcaneValue[0] + this.arcaneValue[1]);
    this.arcaneValue[4] = this.razor(this.arcaneValue[1] + this.arcaneValue[2]);
    this.arcaneValue[5] = this.razor(this.arcaneValue[3] + this.arcaneValue[4]);
    this.arcaneValue[6] = this.razor(this.arcaneValue[3] + this.arcaneValue[2]);
    this.arcaneValue[7] = this.razor(this.arcaneValue[1] + this.arcaneValue[5]);
    this.arcaneValue[11] = this.razor(this.arcaneValue[3] + this.arcaneValue[4] + this.arcaneValue[5]);
    this.arcaneValue[12] = this.razor(this.arcaneValue[0] + this.arcaneValue[3] + this.arcaneValue[5]);
    this.arcaneValue[13] = this.razor(this.arcaneValue[2] + this.arcaneValue[4] + this.arcaneValue[5]);
    this.arcaneValue[8] = this.razor(this.arcaneValue[0] > this.arcaneValue[1] ? this.arcaneValue [0] - this.arcaneValue[1] : this.arcaneValue[1] - this.arcaneValue[0]);
    this.arcaneValue[9] = this.razor(this.arcaneValue[1] > this.arcaneValue[2] ? this.arcaneValue [1] - this.arcaneValue[2] : this.arcaneValue[2] - this.arcaneValue[1]);
    this.arcaneValue[10] = this.razor(this.arcaneValue[8] > this.arcaneValue[9] ? this.arcaneValue [8] - this.arcaneValue[9] : this.arcaneValue[9] - this.arcaneValue[8]);
    this.arcaneValue[14] = this.razor(this.arcaneValue[0] + this.arcaneValue[3]); //A
    this.arcaneValue[15] = this.razor(this.arcaneValue[1] + this.arcaneValue[3]); //B
    this.arcaneValue[16] = this.razor(this.arcaneValue[1] + this.arcaneValue[4]); //C
    this.arcaneValue[17] = this.razor(this.arcaneValue[2] + this.arcaneValue[4]); //D
    this.arcaneValue[18] = this.razor(this.arcaneValue[3] + this.arcaneValue[5]); //E
    this.arcaneValue[19] = this.razor(this.arcaneValue[1] + this.arcaneValue[5]); //F
    this.arcaneValue[20] = this.razor(this.arcaneValue[18] + this.arcaneValue[14]); //H
    this.arcaneValue[21] = this.razor(this.arcaneValue[16] + this.arcaneValue[17]); //G1
    this.arcaneValue[22] = this.razor(this.arcaneValue[15] + this.arcaneValue[19]); //G2
  }

  private razor = (value: number): number  => value > 22 ? this.razor(value - 22) : value
}

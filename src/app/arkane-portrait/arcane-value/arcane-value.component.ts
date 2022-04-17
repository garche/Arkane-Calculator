import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-arcane-value',
  templateUrl: './arcane-value.component.html',
  styleUrls: ['./arcane-value.component.css']
})
export class ArcaneValueComponent implements OnInit {
  @Input()
  public key!: number | string

  @Input()
  public value!: number

  public result!: string

  constructor() { }

  ngOnInit(): void {
    this.result = rimNumber[this.value || 22]
  }

}

enum rimNumber{
  'I' = 1,
  'II' = 2,
  'III' = 3,
  'IV' = 4,
  'V' = 5,
  'VI' = 6,
  'VII' = 7,
  'VIII' = 8,
  'IX' = 9,
  'X' = 10,
  'XI' = 11,
  'XII' = 12,
  'XIII' = 13,
  'XIV' = 14,
  'XV' = 15,
  'XVI' = 16,
  'XVII' = 17,
  'XVIII' = 18,
  'XIX' = 19,
  'XX' = 20,
  'XXI' = 21,
  'XXII' = 22,
}

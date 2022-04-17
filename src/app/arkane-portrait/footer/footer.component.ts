import { Component, OnInit } from '@angular/core';
import {ModalService} from "../modal.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less']
})
export class FooterComponent {

  constructor(private _modalService: ModalService) {
  }

  public openModal() {
    this._modalService.open();
  }

  public closeModal() {
    this._modalService.close();
  }

  public goToTelegram(){
    window.open('https://t.me/KaterinaPutintseva')
  }
}


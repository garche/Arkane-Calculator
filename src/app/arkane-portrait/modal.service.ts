import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ModalService {
  private modal: any;

  add(modal: any) {
    this.modal = modal;
  }

  remove() {
    this.modal = null;
  }

  open() {
    this.modal.open();
  }

  close() {
    this.modal.close();
  }
}

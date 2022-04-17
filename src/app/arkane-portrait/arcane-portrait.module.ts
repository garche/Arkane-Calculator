import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ArcanePortraitComponent } from "./arcane-portrait.component";
import {RouterModule, Routes} from "@angular/router";
import { ArcaneValueComponent } from './arcane-value/arcane-value.component';
import { FooterComponent } from './footer/footer.component';
import {ModalComponent} from './modal-detail/modal-detail.component';
import {ModalService} from "./modal.service";

const appRoutes: Routes = [{ path: '', component: ArcanePortraitComponent }];

@NgModule({
  declarations: [
    ArcanePortraitComponent,
    ArcaneValueComponent,
    FooterComponent,
    ModalComponent
  ],
  imports: [
    RouterModule.forChild(appRoutes),
    CommonModule,
    RouterModule
  ],
  providers: [ModalService],
})
export class ArcanePortraitModule { }

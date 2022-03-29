import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ArcanePortraitComponent } from "./arcane-portrait.component";
import {RouterModule, Routes} from "@angular/router";

const appRoutes: Routes = [{ path: '', component: ArcanePortraitComponent }];

@NgModule({
  declarations: [
    ArcanePortraitComponent
  ],
  imports: [
    RouterModule.forChild(appRoutes),
    CommonModule,
    RouterModule
  ],
  providers: [],
})
export class ArcanePortraitModule { }

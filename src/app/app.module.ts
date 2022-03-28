import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OnbordingComponent } from './onbording/onbording.component';
import { ArcanePortraitComponent } from './arkane-portrait/arcane-portrait.component';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    OnbordingComponent,
    ArcanePortraitComponent
  ],
  imports: [
    BrowserModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

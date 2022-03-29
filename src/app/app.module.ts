import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { OnbordingComponent } from './onbording/onbording.component';
import {RouterModule, Routes} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

const appRoutes: Routes =[
  { path:'',
    component: OnbordingComponent},
  { path:'portrait/:date',
    loadChildren: () => import('./arkane-portrait/arcane-portrait.module').then(m => m.ArcanePortraitModule)},
]

@NgModule({
  declarations: [
    AppComponent,
    OnbordingComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

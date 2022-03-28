import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router';
import {OnbordingComponent} from "./onbording/onbording.component";

const appRoutes: Routes =[
  { path:'',
    component: OnbordingComponent},
  { path:'portrait',
    loadChildren: () => import('./arkane-portrait/arcane-portrait.module').then(m => m.ArcanePortraitModule)},
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class LayoutRoutingModule{ }

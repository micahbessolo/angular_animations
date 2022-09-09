import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LeftPageComponentComponent } from './left-page-component/left-page-component.component';
import { RightPageComponentComponent } from './right-page-component/right-page-component.component';
import { MiddleComponent } from './middle/middle.component';

const routes: Routes = [
  { path: 'left-page', component: LeftPageComponentComponent, data: {animation: 'isLeft'} },
  { path: 'right-page', component: RightPageComponentComponent, data: {animation: 'isRight'} },
  { path: 'middle-page', component: MiddleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LeftPageComponentComponent, RightPageComponentComponent, MiddleComponent];

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';

import { AppComponent } from './app.component';

import { LeftPageComponentComponent } from './left-page-component/left-page-component.component';
import { MiddleComponent } from './middle/middle.component';
import { RightPageComponentComponent } from './right-page-component/right-page-component.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    LeftPageComponentComponent,
    RightPageComponentComponent,
    MiddleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

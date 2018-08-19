import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { Inroot2Component } from './inroot2/inroot2.component';

@NgModule({
  declarations: [
    AppComponent,
   
    Inroot2Component,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
//import { Comp1Component } from './comp1/comp1.component';
import { P2cComponent } from './p2c/p2c.component';
import { C2pComponent } from './c2p/c2p.component';

@NgModule({
  declarations: [
    AppComponent,
    //Comp1Component,
    P2cComponent,
    C2pComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DetComponent } from './det/det.component';
import { NamesComponent } from './names/names.component';
import { NnpComponent } from './nnp/nnp.component';

@NgModule({
  declarations: [
    AppComponent,
    DetComponent,
    NamesComponent,
    NnpComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

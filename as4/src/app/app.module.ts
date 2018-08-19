import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OsComponent } from './os/os.component';
import { PlComponent } from './pl/pl.component';
import { DbComponent } from './db/db.component';

@NgModule({
  declarations: [
    AppComponent,
    OsComponent,
    PlComponent,
    DbComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

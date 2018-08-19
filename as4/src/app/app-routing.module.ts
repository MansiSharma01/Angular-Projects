import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { OsComponent } from './os/os.component';
import { PlComponent } from './pl/pl.component';
import { DbComponent } from './db/db.component';


const routes: Routes = [
  {path : 'db', component:DbComponent},
  {path : 'os', component:OsComponent},
  {path : 'pl', component:PlComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

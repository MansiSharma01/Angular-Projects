import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<!--The content below is only a placeholder and can be replaced.-->
  <div style="text-align:center">
    <h1>
      Welcome to {{ title }}!
    </h1>
  </div>
  <h2>
    Educating for better tomorrow...
  </h2>
  <h3>
   The Name Attribute:
  </h3>             
  <form > 
    First Name : <br>
    <input type="text" value="Mickey">
    <br>
    last Name: <br>
    <input type="text" name="lastname" value="Mouse" >
    <br><br> 
  </form>`,
  styles: [`form{
    color : blue;
}
`]
})
export class AppComponent {
  title = 'Marvellous Infoystems';
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div style="text-align:center">
  <h1>
    Welcome to {{ title }}!!!!
  </h1>
</div>
<h2>Educating for better tomorrow.. </h2>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Marvellous Infosystems';
}

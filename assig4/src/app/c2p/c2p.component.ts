import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-c2p',
  templateUrl: './c2p.component.html',
  styleUrls: ['./c2p.component.css']
})
export class C2pComponent implements OnInit {

@Output() public eve = new EventEmitter();

public data1()
{
  this.eve.emit('Hi Parnet');
}

  constructor() { }

  ngOnInit() {
  }

}

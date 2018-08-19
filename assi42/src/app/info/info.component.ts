import { Component, OnInit } from '@angular/core';
import { ServService } from '../serv.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

public data1 = [];

  constructor(private _servservice:ServService) { }

  public ClickMe() 
  {
    this._servservice.GetStudDetails()
    .subscribe(data=>this.data1=data);
  }
  ngOnInit(){}
}

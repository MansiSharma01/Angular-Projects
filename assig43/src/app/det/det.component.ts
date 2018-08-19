import { Component, OnInit } from '@angular/core';
import { ServicService } from '../servic.service';

@Component({
  selector: 'app-det',
  templateUrl: './det.component.html',
  styleUrls: ['./det.component.css']
})
export class DetComponent implements OnInit {

 public books = [];

  constructor(private _servicservice:ServicService) { }

  ngOnInit() 
  {
    this.books = this._servicservice.GetBookDetails();
  }

}

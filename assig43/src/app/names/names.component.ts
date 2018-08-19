import { Component, OnInit } from '@angular/core';
import { ServicService } from '../servic.service';

@Component({
  selector: 'app-names',
  templateUrl: './names.component.html',
  styleUrls: ['./names.component.css']
})
export class NamesComponent implements OnInit {

  public books = [];

  constructor(private _servicservice:ServicService) { }

  ngOnInit() 
  {
    this.books = this._servicservice.GetBookDetails();
  }

}

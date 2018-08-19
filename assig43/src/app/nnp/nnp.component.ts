import { Component, OnInit } from '@angular/core';
import { ServicService } from '../servic.service';

@Component({
  selector: 'app-nnp',
  templateUrl: './nnp.component.html',
  styleUrls: ['./nnp.component.css']
})
export class NnpComponent implements OnInit {

  public books = [];

  constructor(private _servicservice:ServicService) { }

  ngOnInit() 
  {
    this.books = this._servicservice.GetBookDetails();
  }

}

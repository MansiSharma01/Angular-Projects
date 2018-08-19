import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicService {

  constructor() { }

  GetBookDetails()
  {
    return[
      {"name":"Programming in C", "price":500, "author":"Ajay Mittal"},
      {"name":"Thinking in C++ Vol.1", "price":1200, "author":"Bruce Eckel"},
      {"name":"Thinking in C++ Vol.2", "price":1000, "author":"Bruce Eckel"}

    ];
  }

}

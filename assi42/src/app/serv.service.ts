import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Iinter} from './inter';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServService {

  constructor(private http:HttpClient) { }

  private _url:string = "/assets/Info/data1.json";
  
  GetStudDetails():Observable<Iinter[]>
  {
    return this.http.get<Iinter[]>(this._url);
  }
}

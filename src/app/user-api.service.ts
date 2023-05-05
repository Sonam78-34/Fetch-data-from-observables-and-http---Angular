import { Injectable } from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {Observable } from 'rxjs';
import {IPostId} from './IPostId';
@Injectable({
  providedIn: 'root'
})
export class UserApiService 
{
  private url : string ="https://jsonplaceholder.typicode.com/comments";
  constructor( private http : HttpClient) { }
  
  gerPostId() : Observable<IPostId>
  {
    return this.http.get<IPostId>(this.url);
  }
}

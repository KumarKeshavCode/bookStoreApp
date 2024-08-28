import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  baseUrl : string ="https://bookstore.incubation.bridgelabz.com";

  constructor( private httpclient  : HttpClient  ) { }

  getBooks(endpoint :string){
    return this.httpclient.get(this.baseUrl+endpoint);
  }
}

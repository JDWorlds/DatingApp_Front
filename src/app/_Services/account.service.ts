import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  baseUrl='http://localhost:5043/datingApp/';
  constructor(private http: HttpClient){}

  login(model: any)
  {
    return this.http.post(this.baseUrl+'Accout/login', model)
  }
  
}

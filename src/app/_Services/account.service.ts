import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../_models/User';
import { BehaviorSubject, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  baseUrl='http://localhost:5043/datingApp/';
  private CurrentUserSource = new BehaviorSubject<User | null>(null);
  CurrentUser$ = this.CurrentUserSource.asObservable();


  constructor(private http: HttpClient){}

  login(model: any)
  {
    return this.http.post<User>(this.baseUrl+'Accout/login', model).pipe(
      map((response : User)=>{
        const user = response;
        if(user)
        {
          localStorage.setItem('user', JSON.stringify(user));
          this.CurrentUserSource.next(user);
        }
      })
    )
  }

  setCurrentUser(user : User)
  {
    this.CurrentUserSource.next(user);
  }

  logout()
  {
    localStorage.removeItem('user');
    this.CurrentUserSource.next(null);
  }
}
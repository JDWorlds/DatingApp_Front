import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  registerMode = false;
  users: any;
  title: any='No Err';

  constructor(private http: HttpClient){}

  ngOnInit(): void {
    this.getUsers();
  }

  registertoggle(){
    this.registerMode = !this.registerMode;
  }

  getUsers(){
    this.http.get('http://localhost:5043/datingApp/Users').subscribe({
      next      : Response => this.users = Response,
      error     : error    => console.log(error),
      complete  : ()       => console.log(this.title)
    })
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  email: string = '';
  password: string = '';
  role:string="";

  ngOnInit(): void {
  }

  login(){
    alert("User logged in");
  }

}

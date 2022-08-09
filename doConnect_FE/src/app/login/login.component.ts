import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService:UserService, private router:Router, private bar: MatSnackBar) { }

  email: string = '';
  password: string = '';
  role:string="";

  ngOnInit(): void {
  }

  login(): void {
    this.userService.login({email: this.email,password: this.password,role:this.role}).then(
      (res) => {
        if (res === 'admin') {
          this.router.navigate(['admindashboard']);
        } 
        else if (res === 'user') {
          this.userService.getUserByEmail(this.email)
            .then((res) => {
              if (res !== null) {
                localStorage.setItem('name', res.name);
                localStorage.setItem('email', res.email);
                localStorage.setItem('userId', res.id);
                localStorage.setItem('role',res.role);
              }
            })
            .then(() => this.router.navigate(['UserDashBoard']));
        } else {
          this.bar.open('Please Check the credentials', 'Close', {duration: 3000,});
        }
      });
  }

}

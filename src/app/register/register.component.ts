import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/User';
interface NewUser {
  username: string;
  password: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  constructor(private http: HttpClient, private router: Router) {}

  user: User = new User('', '', '');

  samePassword(password: string, passwordConfirm: string) {
    return password !== passwordConfirm;
  }

  minMaxUsername(username: string) {
    return username.length < 3 || username.length > 10;
  }

  onSubmit(): void {
    console.log(this.user);
    const newUser: NewUser = {
      username: this.user.username,
      password: this.user.password,
    };
    this.http
      .post('https://kitty--server.herokuapp.com/api/register', newUser, {
        headers: new HttpHeaders({
          'Acces-Control-Allow-Origin': 'https://kitty--server.herokuapp.com/',
          'Access-Control-Allow-Methods': 'GET,POST,PATCH,DELETE,PUT,OPTIONS',
          'Access-Control-Allow-Headers':
            'Origin, Content-Type, X-Auth-Token, content-type, Authorization',
        }),
      })
      .subscribe((Response) => {
        console.log(Response);
        this.router.navigate(['/login']);
      });
  }

  ngOnInit(): void {}
}

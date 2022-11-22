import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { User } from '../model/user';
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
  constructor(private http: HttpClient) {}

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
      .post('http://localhost:8080/api/register', newUser, {
        headers: new HttpHeaders({ 'Acces-Control-Allow-Origin': '*' }),
      })
      .subscribe((Response) => {
        console.log(Response);
      });
  }

  ngOnInit(): void {}
}

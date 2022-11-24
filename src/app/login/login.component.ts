import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  model: any = {};

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit() {
    sessionStorage.clear();
  }

  login() {
    console.log(this.model);
    this.http
      .post(
        'https://kitty--server.herokuapp.com/api/login',
        {
          username: this.model.username,
          password: this.model.password,
        },
        {
          headers: new HttpHeaders({
            'Acces-Control-Allow-Origin': '*',
          }),
        }
      )
      .subscribe((isValid) => {
        console.log(isValid);
        if (isValid) {
          sessionStorage.setItem(
            'token',
            btoa(this.model.username + ':' + this.model.password)
          );
          sessionStorage.setItem('username', this.model.username);
          this.router.navigate(['chat']);
        } else {
          alert('Authentication failed.');
        }
      });
  }
}
